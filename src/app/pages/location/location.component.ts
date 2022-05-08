import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  Locations:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetLocations().subscribe(res => {
      console.log(res)
      this.Locations = res;
    })
  }

  delete(_id:any, i:any) {
    console.log(i)
    console.log(_id)
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteLocation(_id).subscribe((res) => {
        this.Locations.splice(i, 1);
      })
    }
  }

}
