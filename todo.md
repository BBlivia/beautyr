add comment model 
-figure out routes and functions 
add profile picture to user 
add edit profile link and page, so users can add profile image or change user name 

populate the states and make it an option select list
I want to make it so people are able to reply to comments 
add a search funtion where people can search based on location, IG person name



<%= comments[i].createdByUsername%> : <%= comments[i].comment%>
          <% if(comments[i].createdById == user.id) {%>   




          <ul>
      <% for(var i=0; i<comments.length; i++) {%>
        <li class="col-6 justify-content-between mt-5">

           <%= comments[i].comment%>  
        </li>
            <form
            class="col-1"
            action="/comment/likeComment/<%=post.id%>/<%=comments[i]._id %>?_method=PUT"
            method="POST"
          >
            <button class="btn btn-primary fa fa-heart" type="submit">like</button>
          </form>
          
          <h3 class="col-3">Likes: <%= comments[i].likes %></h3>
          
           <form
          action="/comment/deleteComment/<%=post.id%>/<%=comments[i]._id %>?_method=DELETE"
          method="POST"
              
        >
          <button class="btn btn-outline-danger" type="submit">delete</button>
        </form>
        <% } %>
        </li>
        
      <% } %>
    </ul>






<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
      crossorigin="anonymous"
    />