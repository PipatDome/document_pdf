import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-isoation-hi',
  templateUrl: './home-isoation-hi.component.html',
  styleUrls: ['./home-isoation-hi.component.css']
})
export class HomeIsoationHiComponent implements OnInit {
  public day = '16'
  public month = 'ตุลาคม'
  public fullname = 'พิพัฒน์ จริยะยรรยง'
  public age = '24'
  public card_id = '1234567890111'
  public day_b = '16'
  public month_b = '10'
  public year_b = '2541'
  public relationship = 'มารดา'
  public fullname_sickness = 'ฟฟฟฟฟ ฟฟฟฟฟฟ'
  public card_id_sickness = '11111111111'
  public day_sickness = '10'
  public month_sickness = '10'
  public year_sickness = '2566'
  public find_day = '10'
  public find_month = 'ตุลาคม'
  public order_number = '12345'
  public patient_care = '987654'
  public detained_home = '98/2'
  public detained_alley = '-'
  public detained_road = '-'
  public detained_tell = '089-999-9999'
  public close_person_address = '059/1'
  public close_person_tell = '089-999-9999'
  public Home_Isolation_day = '26'
  public Home_Isolation_month = 'ตุลาคม'
  public name_doctor = 'aaaa aaaaaa'
  public name_sickness = 'bbbbbb bbbbbb'
  constructor() { }

  ngOnInit(): void {
  }

}
