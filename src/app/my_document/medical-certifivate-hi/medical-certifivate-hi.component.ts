import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-certifivate-hi',
  templateUrl: './medical-certifivate-hi.component.html',
  styleUrls: ['./medical-certifivate-hi.component.css']
})
export class MedicalCertifivateHIComponent implements OnInit {
  public name = 'Pipat'
  public lastname = 'Jariyayunyong'
  public card_id = '1-2345-67890-12-3'
  public address = '11/2 หมู่ 2 ต.สส อ.สส จ.พิดโลก'
  public hospital = 'พิษณุเวช'
  public date_ATK = '10-10-2565'
  public date_Owsi_f = '22-10-2565'
  public date_Owsi_e = '31-10-2565'
  public day_Owsi = 10
  public other_history = ' ----------- ทดสอบ ----------- '
  public date_part_2 = '11-11-2565'
  public name_doctor = 'นายแพทย์รัฐภูมิ  ชามพูนท'
  public professional_license = 'ว.23356'
  public date_doctor_check = '9-9-2565'
  public have_Asymptomatic = 'มีอาการ have_Asymptomatic'
  public date_Owsi_f_part_2 = '1-2-2565'
  public date_Owsi_e_part_2 = '5-2-2565'
  constructor() { }

  ngOnInit(): void {
  }

}
