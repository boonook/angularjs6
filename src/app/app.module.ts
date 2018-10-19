import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { HttpService } from './http.service';
import { CookieService } from "ngx-cookie-service";
import { ParentsComponent } from "./my-content/parents/parents.component";
import { ChildrenComponent } from './my-content/children/children.component';
import { Children2Component } from './my-content/children2/children2.component';
import { Parent2Component } from './my-content/parent2/parent2.component';
import { Children3Component } from './my-content/children3/children3.component';
import { Parent3Component } from './my-content/parent3/parent3.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reduces/tutorial.reducers';
import { ReadComponent } from './my-content/read/read.component';
import { CreateComponent } from './my-content/create/create.component';
import { MomentComponent } from './my-content/moment/moment.component';
import { EditorComponent } from './my-content/editor/editor.component';
import {EditorMdDirective} from './my-content/editor/editor-md.directive';
import { UploadCallbackComponent } from './upload-callback/upload-callback.component';
@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtondcComponent,
    ChicagoComponent,
    ParentsComponent,
    ChildrenComponent,
    Children2Component,
    Parent2Component,
    Children3Component,
    Parent3Component,
    ReadComponent,
    CreateComponent,
    MomentComponent,
    EditorComponent,
    EditorMdDirective,
    UploadCallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    AppRoutingModule, // <--- Our routing rules
    HttpModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [HttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
