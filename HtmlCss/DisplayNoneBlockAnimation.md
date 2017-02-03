````
  :host >>> li
    {
      
        list-style-type:none;
      
        transition: 1s;
        width:100%;
        height:0px;
        display:none;
      
    }

    :host >>> .current
    {
        display:block !important;
        color:red;
        height:100% !important;
     -webkit-animation: grow .5s ease-out;

    }


@keyframes grow {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

    @-webkit-keyframes slide-down {
        0% { opacity: 0;  }
        25% { opacity: 0.25;  }
        50% { opacity: 0.5;  }
        75% { opacity: 0.75;  }
        100% { opacity: 1; }
    }


````
