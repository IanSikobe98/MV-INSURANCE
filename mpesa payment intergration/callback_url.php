<?php
session_start();
header("Access-Control-Allow-Origin: *");
  date_default_timezone_set('Africa/Nairobi');
  $stkCallbackResponse = file_get_contents('php://input');
  $logFile = "stkPushCallbackResponse.json";
  
//   $logFile = "food.json";
  $log = fopen($logFile, "a");
  ftruncate($log, 0);
  fwrite($log, $stkCallbackResponse);
  fclose($log);
?>