<?php
session_start();
header("Access-Control-Allow-Origin: *");
  date_default_timezone_set('Africa/Nairobi');
  header("Access-Control-Allow-Origin: *");
header("content-type: application/json");
if(isset($_GET["mid"])){

    $mid  = $_GET["mid"];
$strJsonFileContents = file_get_contents("stkPushCallbackResponse.json");
// Convert to array 
// $array = $strJsonFileContents;
$array = json_decode($strJsonFileContents, true);
// var_dump($array); // print array
// print_r($array['Body']['stkCallback']['MerchantRequestID']);
// $st1=time();
while($array['Body']['stkCallback']['MerchantRequestID']!=$mid ){

sleep(3);
$strJsonFileContents = file_get_contents("stkPushCallbackResponse.json");
$array2 = json_decode($strJsonFileContents, true);
$array = $array2;}
print_r($strJsonFileContents);
// ['Body']['stkCallback']['MerchantRequestID']
}


else{
    $user_arr=array(
            "status" => false,
            "message" => "Failed to receive GET variables Please try again",
        );
}
?>