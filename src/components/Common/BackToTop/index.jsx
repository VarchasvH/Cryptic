import { Tooltip } from "@mui/material";
import "./styles.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const BackToTop = () => {
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <Tooltip title='Back to top'>
      <div
        className='back-to-top icon'
        id='myBtn'
        onClick={() => topFunction()}
      >
        <KeyboardDoubleArrowUpIcon className='icon' />
      </div>
    </Tooltip>
  );
};

export default BackToTop;
