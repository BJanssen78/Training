<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Step 1: Collect user input
  $eventName = $_POST['eventName'];
  $eventShortDescr = $_POST['eventShortDescr'];
  $eventLongtDescr = $_POST['eventLongtDescr'];
  $eventDate = $_POST['eventDate'];
  $eventStartTime = $_POST['eventStartTime'];
  $eventEndTime = $_POST['eventEndTime'];
  $eventLocation = $_POST['eventLocation'];
  $userName = $_POST['userName'];
  $categories = isset($_POST['categories']) ? $_POST['categories'] : [];
  $newCategory = $_POST['newCategory'];

  // Step 2: Check if the username exists
  $userId = getUserIdByUsername($userName);
  if (!$userId) {
    $userId = createNewUser($userName);
  }

  // Step 3: Update categories dynamically
  if (!empty($newCategory)) {
    $categoryIds = updateCategories($categories, $newCategory);
  } else {
    $categoryIds = $categories;
  }

  // Step 4: Get the next event ID and user ID
  $eventId = getNextEventId();
  $nextUserId = getNextUserId();

  // Step 5: Create random attendees
  $users = getRandomAttendees($nextUserId);
  $attendedBy = array_column($users, 'userID');

  // Step 6: Update the database.json file
  $updateSuccess = updateDatabase($eventId, $eventName, $eventShortDescr, $eventLongtDescr, $eventDate, $eventStartTime, $eventEndTime, $eventLocation, $userId, $attendedBy, $categoryIds);

  // Step 7: Create mail message
$message = addslashes(json_encode([
  "eventID" => $eventId,
  "eventName" => $eventName,
  "eventShortDescr" => $eventShortDescr,
  "eventLongtDescr" => $eventLongtDescr,
  "eventDate" => $eventDate,
  "eventStartTime" => $eventStartTime,
  "eventEndTime" => $eventEndTime,
  "eventLocation" => $eventLocation,
  "eventCreatedBy" => $userId,
  "eventImage" => "https://via.placeholder.com/150",
  "attendedBy" => $attendedBy,
  "catergoriesIds" => $categoryIds
]));

// Step 8: Provide message on screen to the user
if ($updateSuccess) {
  echo 'Success! Event created.';
  echo '<button onclick="window.location.href=\'https://www.bepeel.nl\'">Go to Bepeel.nl</button>';
} else {
  echo 'Error! Event creation failed.';
  echo '<button onclick="window.location.href=\'https://www.bepeel.nl\'">Go to Bepeel.nl</button>';
}

// Step 9: If error, collect all user input and send an email
$errorSubject = "Event Creation Error";
$errorBody = "User Input:\n\n";
$errorBody .= "Event Name: " . $eventName . "\n";
$errorBody .= "Event Short Description: " . $eventShortDescr . "\n";
$errorBody .= "Event Long Description: " . $eventLongtDescr . "\n";
$errorBody .= "Event Date: " . $eventDate . "\n";
$errorBody .= "Event Start Time: " . $eventStartTime . "\n";
$errorBody .= "Event End Time: " . $eventEndTime . "\n";
$errorBody .= "Event Location: " . $eventLocation . "\n";
$errorBody .= "Your Name: " . $userName . "\n";

if (!empty($categories)) {
  $categoryNames = getCategoryNamesByIds($categories);
  $errorBody .= "Categories: " . implode(", ", $categoryNames) . "\n";
}

if (!empty($newCategory)) {
  $errorBody .= "New Category: " . $newCategory . "\n";
}

$errorRecipient = "b.janssen@bepeel.nl"; // Change to the appropriate email address
$errorHeaders = "From: noreply@bepeel.nl";

mail($errorRecipient, $errorSubject, $errorBody, $errorHeaders);
}


// Function to get the user ID by username
function getUserIdByUsername($username) {
  $database = json_decode(file_get_contents('database.json'), true);
  $users = $database['users'];
  foreach ($users as $user) {
    if ($user['userName'] === $username) {
      return $user['userID'];
    }
  }
  return false;
}

// Function to create a new user
function createNewUser($username) {
  $database = json_decode(file_get_contents('database.json'), true);
  $users = $database['users'];

  $newUserId = getNextUserId();

  $newUser = [
    'userID' => $newUserId,
    'userName' => $username,
    'userPass' => 'blablabla123@', // Example password
    'userEmail' => 'user@server.nl', // Example email
    'userRole' => 1 // Example user role
  ];

  $users[] = $newUser;

  $database['users'] = $users;
  file_put_contents('database.json', json_encode($database, JSON_PRETTY_PRINT));

  return $newUserId;
}

// Function to update categories dynamically
function updateCategories($categories, $newCategory) {
  $database = json_decode(file_get_contents('database.json'), true);
  $existingCategories = $database['catergories'];

  // Check if the new category already exists
  foreach ($existingCategories as $category) {
    if ($category['catergoryName'] === $newCategory) {
      return $categories; // Return the existing category IDs
    }
  }

  // Generate a new category ID
  $newCategoryId = getNextCategoryId();

  // Create the new category
  $newCategoryData = [
    'catergoryID' => $newCategoryId,
    'catergoryName' => $newCategory
  ];

  $existingCategories[] = $newCategoryData;

  $database['catergories'] = $existingCategories;
  file_put_contents('database.json', json_encode($database, JSON_PRETTY_PRINT));

  // Add the new category ID to the selected categories
  $categories[] = $newCategoryId;

  return $categories;
}

// Function to get the next event ID
function getNextEventId() {
  $database = json_decode(file_get_contents('database.json'), true);
  $events = $database['events'];
  $lastEvent = end($events);
  return $lastEvent['eventID'] + 1;
}

// Function to get the next user ID
function getNextUserId() {
  $database = json_decode(file_get_contents('database.json'), true);
  $users = $database['users'];
  $lastUser = end($users);
  return $lastUser['userID'] + 1;
}

// Function to get the next category ID
function getNextCategoryId() {
  $database = json_decode(file_get_contents('database.json'), true);
  $categories = $database['catergories'];
  $lastCategory = end($categories);
  return $lastCategory['catergoryID'] + 1;
}

// Function to update the database.json file
function updateDatabase($eventId, $eventName, $eventShortDescr, $eventLongtDescr, $eventDate, $eventStartTime, $eventEndTime, $eventLocation, $userId, $attendedBy, $categoryId) {
  $database = json_decode(file_get_contents('database.json'), true);
  $events = $database['events'];

  $newEvent = [
    'eventID' => $eventId,
    'eventName' => $eventName,
    'eventShortDescr' => $eventShortDescr,
    'eventLongtDescr' => $eventLongtDescr,
    'eventDate' => $eventDate,
    'eventStartTime' => $eventStartTime,
    'eventEndTime' => $eventEndTime,
    'eventLocation' => $eventLocation,
    'eventCreatedBy' => $userId,
    'eventImage' => 'https://via.placeholder.com/150', // Example image
    'attendedBy' => $attendedBy,
    'catergoriesIds' => $categoryId
  ];

  $events[] = $newEvent;

  $database['events'] = $events;
  file_put_contents('database.json', json_encode($database, JSON_PRETTY_PRINT));

  return true;
}


// Function to get random attendees
function getRandomAttendees($nextUserId) {
  $database = json_decode(file_get_contents('database.json'), true);
  $users = $database['users'];

  $randomCount = mt_rand(1, count($users));

  $randomAttendees = array_rand($users, $randomCount);
  if (!is_array($randomAttendees)) {
    $randomAttendees = [$randomAttendees];
  }

  $attendees = [];
  foreach ($randomAttendees as $randomIndex) {
    $attendees[] = $users[$randomIndex];
  }

  return $attendees;
}
?>