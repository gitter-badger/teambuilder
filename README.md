teambuilder
===========
Features:
 1. Browse development teams.
   On home page display two sections for specific teams (Front-End, Back-End).
   Every section should display a list of team members (Avatar image, Name).
  
 2. Add new team member.
   Provide form to create a new team player record.
   User should have ability to name, avatar image url and choose a team for new team member.
   All fields are required. Name field should  be at least 3 and not more than 30 symbols long.
   Image Url should start from 'http://' or 'https://'
   Team radio-button should be selected.
   If form filled in incorectly and user press 'Save' button - display error message near wrong filled field.
   If form filled in correctly and user press 'Save' button - display home page with new user record in specified team section.
   
 3. Edit team member.
   When user hover team member record display pencil icon near team member's name.
   When user clicks pencil icon replace username label with input and allow user to change team player's name. ( restrict saving empty value )
   Finish editing on blur event or 'enter' button keypress.

 4. Remove team member.
   When user clicks remove button near team member record - record is removed from the list. (provide confirmation popup)
       
 5. Additional Feature. Sorting
   Provide ability to sort each panel separately by name in ascending and descending order.

Requirements:

      Template language:
         HTML
         
      CSS tools:
         anything you wish.
         
      JavaScript tools:
         Underscore.js
         Backbone.js
         JQuery
