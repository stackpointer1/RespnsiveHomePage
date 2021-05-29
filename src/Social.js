import React from "react";
import "./Social.css";
import { Button } from "react-bootstrap";
function Social() {
  return (
    <div className="Social">
      <div>
        <span className="facebook">
          <Button variant="outline-warning" size="sm">
            <i class="fab fa-facebook-square fa-lg"> Likes 1.5k</i>
          </Button>
        </span>
        <span classNmae="twitter">
          <Button variant="outline-info" size="sm">
            <i class="fab fa-twitter fa-lg"></i>Tweet(1)
          </Button>
        </span>
        <span className="cal">
          <Button variant="outline-danger" size="sm">
            <i class="far fa-calendar-alt"></i> calendar ✓
          </Button>
        </span>
      </div>
    </div>
  );
}
export default Social;
