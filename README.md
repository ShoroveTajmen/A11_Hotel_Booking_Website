- Website Name --> Hotel Booking System.
- Live Site Link --> [Hotel Booking System](http://wealthy-minute.surge.sh)
- Server Side Repo Link --> (https://github.com/ShoroveTajmen/A11_Hotel_Booking_Website_ServerSide)

- In below I will list out the 5 Project features ::-

 - OverView Of Homepage ->
This website is based on online hotel management system.In home page, there is a navigation bar, a banner section, featured section, special offers section, a newsletter section where user can share their thoughts, a map section where user can identify our hotel location and a footer section. This website shown multiple luxury rooms, user can choose their desire rooms based on price ranges and dates. Dynamic routing and  private routes that require sign-in are available in the navigation area. The user name, profile picture, and logout button are displayed in the right side of the navigation bar whenever we sign in to the website. In navigation bar there are two private routes available which is My Bookings and room details. 


 - Rooms route details ->
In this route, user can see multiple rooms and user can choose their desire rooms by filtering price range. Here user can see basic room details overview but after clicking on the book now button user will redirect to the new page. In that room details page user see that specific room related pictuires at different view. User see rooms info like room description, room price, room sizer and special offers. If user wants to book this room then user select a dates and if seats are available then booking now button shown available and user can booking rooms and before confirming user show their selected summury. If seats availability is 0 user can not book this room and booking now button will be unavailable. In room review part user see total number of review based on this room and also see others users review.


 - My Bookings route->
 In my bookings route user see their booked rooms. User can delete their booking before 24 hours otherwise user can not delete or cancel their bookings. If user want to cahnge their bookings date then user can click on the update date buton and will redirect to the new page user can update their booking date. User also added their thoughts/review like rating, username, comment and date.


  - Log In and Registration page Overview -> 
The fields for name, photo, email, and password on the registration page. At least six characters must be included in the password, including one capital letter and one special character. It will display an error toast otherwise. A successful registration toast will appear once you click the register button. Users may also register using Google. The user profile picture, username, and logout button all vanish when we click log out button, and the log in button appears in the navigation bar. When we click the log in button and provide the proper gmail address and password, we are successfully logged in; otherwise, an error toast will show. A Google Account can also be used to log in. 


  - JWT related Overview -> 
Json web token verification is added in this project. When a user log in to the website json web token will be stored in the cookie. Json web token also created when user log in via google. JWT verfication added in private route, unauthorized user can not access any data.

-Technologies Used -> JavaScript, React.js, Node.js, Express.js, MongoDB, Firebase


