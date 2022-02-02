# Fishfry Tours BoatTracker tracker app

# Description

A React JS app that is used to track or manage boats states.

# Pages

1. Dashboard: This is where tour guids can easily view the states/statuses(I used state) of boats. The dashboard shows the names of the boats on the left and I used Material UI's slider component for the states. I picked a slider because I thought it can represent the swimlanes visually and users can easily drag the pointer to move to update the states os a boat.  The slider has 4 specific steps docked, Out Bound to Sea, Inbound to Harbour and Maintenance. At the moment these steps are hard coded on the client but the proper way is to fetch available states using a service. This way if you want to add more states, you can do that only on the service and the client won't need any update.

An alternative to the slider would be, radio buttons or may be just drop down buttons. 

2. Admin: This where operators can add/delete new boats. I didn't have time to construct this page but what I have in mind is to have a list t represent existing boats. Each boat list item will have a correcponding Delete Icon button to delet them. I would provide a confirmation box to avoid deleting things when users accidentally click delet button.

I would also add an app bar/menu bar available to add boats.
             
# Responsiveness

The requiremnet mentions that this app should be functional and user friendly for both descktop and mobile users. Therefore I tried to incorporate a mobile first approach and adjust the UI based on the device size.

Nav Bar: Responsive nav bar which is horizontal for big size screens but changes to a humberger menu for small screen.

Dashboard: The dashboard will have two columns one for the name of the boat and the other for the state it's at for big screens. For mobile users, the name and state will be on the same column top and down since there's enough space to represent them both on the same line.

  
 # Testing
 
Didn't have time to add testing on the client. 

 # Error Handling
 
Didn't have time to handle errors either. What I would do is have show user friendly errors on the top or bottom of a page.
 
 # Modules and organization
  
   I tried to combine related components and files together
   
   1. Pages folder: Container components for pages. This is where most of the processing is done.
   2. Components folder: Representational components just to display data.
   3. Types: This is for types and interfaces
   4. Util: for utility functions
 
 # Tools and technologies used
   
   Language: TypeScript (I picked this over JS because it provides type safety and allows you to program in a Object-Oriented prgramming way).
   IDE: Visual Studio Code
   UI Components: Material UI
   
 # Configuration 
 
 What I would like to include is have env file for setting. At the moment, urls for the service are hard coded.
 
 # Deployment 
 
 There isn't a live site deployed. 
 
 # How to install and run
 
 run npm install
     npm start run
     
     Note: You'd need to update your Node.js to the latest version. If there is a version miss match, you'll get a 'Html Webpack Plugin: Error: Child compilation failed'.
