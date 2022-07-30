
    let comments = [];

    function validateForm() {
      let commentsCount = document.forms["projectform"]["comments"].value;
      if (commentsCount.length > 140) {
        alert("Comment exceeds a character count of 140 characters");
        return false;
      }else {
        let name = document.forms["projectform"]["name"].value;
        let comment = document.forms["projectform"]["comments"].value;
        comments.push(`<p>${name}</p><br /><p>${comment}</p><br/><br/>`);
        document.getElementById("yourcomments").innerHTML = comments.join(" <hr /> ");
        return true;
      }
    }
    
    function countText() {
      let commentsCount = document.forms["projectform"]["comments"].value;
      document.getElementById("textcount").innerHTML = commentsCount.length;
      if (commentsCount.length > 140) {
        document.getElementById("comments").setAttribute("class", "error");
      }
      if (commentsCount.length < 140) {
        document.getElementById("comments").setAttribute("class", "");
      }
    }