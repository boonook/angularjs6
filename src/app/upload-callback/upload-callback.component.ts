import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-upload-callback',
  templateUrl: './upload-callback.component.html',
  styleUrls: ['./upload-callback.component.css']
})
export class UploadCallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var query = {};
    var urlParams = window.location.search.split('?')[1];
   var temp = urlParams.split("&");

    for (var i = 0; i< temp.length; i++)
    {
      var param       = temp[i].split("=");
      query[param[0]] = param[1];
    }

    var imageDialog = window.parent.document.getElementById(query['dialog_id']);
    if (parseInt(query['success']) === 1)
    {
      imageDialog.querySelector("[data-url]").value =  decodeURIComponent(query['url']);
    }
    else
    {
      alert(query['message']);
    }

    location.href = "about:blank";
  }

}
