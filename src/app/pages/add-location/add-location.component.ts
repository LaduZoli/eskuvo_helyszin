import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  locationForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.locationForm = this.formBuilder.group({
      name: [''],
      description: [''],
      max_members: [''],
      address: [''],
      photo_url: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddLocation(this.locationForm.value)
    .subscribe(() => {
      console.log("Data added succesfully");
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    }, (err) => {
      console.log(err);
    })
  }

}
