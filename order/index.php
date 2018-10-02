<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order // joshandjames 3D Printing Services</title>
  <link rel="stylesheet" href="https://smith2021.github.io/hermes/w3.css"/>
  <link rel="stylesheet" href="https://use.typekit.net/tlb5civ.css">
  <link rel="stylesheet" href="../main.css"/>
</head>
<body>
  <div class="w3-display-container tk-roboto" style="background-image:url('https://joshandjames.github.io/cogs.jpg');background-size:cover;backgrond-position:center center;background-attachment:fixed;" id="mainImage">
    <div class="w3-display-middle w3-text-white">
      <h2 class="shadow">3D Printing Services</h2>
    </div>
  </div>
  <div class="w3-padding tk-roboto">
    <h2>Order</h2>
    <div>
      <form name="contactform" method="post" action="send_form_email.php">
      <table width="450px">
      <tr>
       <td valign="top">
        <label for="first_name">First Name *</label>
       </td>
       <td valign="top">
        <input type="text" name="first_name" maxlength="50" size="30">
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="last_name">Last Name *</label>
       </td>
       <td valign="top">
        <input  type="text" name="last_name" maxlength="50" size="30">
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="email">Email Address *</label>
       </td>
       <td valign="top">
        <input  type="text" name="email" maxlength="80" size="30">
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="telephone">Telephone Number</label>
       </td>
       <td valign="top">
        <input  type="text" name="telephone" maxlength="30" size="30">
       </td>
      </tr>
      <tr>
       <td valign="top">
        <label for="comments">Comments *</label>
       </td>
       <td valign="top">
        <textarea  name="comments" maxlength="1000" cols="25" rows="6"></textarea>
       </td>
      </tr>
      <tr>
       <td colspan="2" style="text-align:center">
        <input type="submit" value="Submit" class="raised w3-blue">
       </td>
      </tr>
      </table>
      </form>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="../page-init.js"></script>
  <script>
$('#mainImage').css({height: Math.round($(window).height() * 0.85)});
  </script>
</body>
</html>
