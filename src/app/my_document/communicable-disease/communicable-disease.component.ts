import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communicable-disease',
  templateUrl: './communicable-disease.component.html',
  styleUrls: ['./communicable-disease.component.css']
})
export class CommunicableDiseaseComponent implements OnInit {
  public order_number = '11'
  public day = '22'
  public month = '33'
  public name = 'นาย มาดี ไปดี'
  public namesickness = 'นาย มาไม่ดี ไปดี'
  public agesickness = '20'
  public nationalitysickness = 'ไทย'
  public card_id = '1234567891123'
  public tell = '088-888-8999'
  public address_number = '1150/10'
  public address_g = '2'
  public address_road = '-'
  public address_quarantine = '-'
  constructor() { }

  ngOnInit(): void {
  }

}
