

ROUTER
 /index
 /about
 /logement/{i}
 /404



.icon-chevron {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px
}


.icon-chevron::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-color: red;
    left: -16px;
    top: 2px;
}

.icon-chevron-up::before {
  transform: rotate(-135deg);
}

.icon-chevron-down::before {
  transform: rotate(45deg);
}

-----------------

06/07/23 : 
  - typage du logement
  - pages logement, about, not found, principale
  - ajout des routes
  - 