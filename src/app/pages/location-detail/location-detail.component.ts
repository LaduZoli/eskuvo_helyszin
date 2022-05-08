import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activateRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activateRoute.snapshot.paramMap.get('id');

    this.crudService.GetLocation(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        description: res['description'],
        max_members: res['max_members'],
        address: res['address'],
        photo_url: res['photo_url']
      })
    })

    this.updateForm = this.formBuilder.group({
      name: [''],
      description: [''],
      max_members: [''],
      address: [''],
      photo_url: ['']
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateLocation(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Az helyszín frissítése sikeres');
      this.ngZone.run(() => this.router.navigateByUrl('/locations-list'))
    }, (err) => {
      console.log(err);
    })
  }

}
