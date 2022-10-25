import { BandocService } from './../../shared/services/bandoc.service';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';
import { Page } from './../../shared/model/page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandoc',
  templateUrl: './bandoc.component.html',
  styleUrls: ['./bandoc.component.scss']
})
export class BandocComponent implements OnInit {
  items = [];
  page = new Page();
  columns = [
    { name: 'id', prop: 'id', flexGrow: 0.5 },
    { name: 'maBandoc', prop: 'maBandoc', flexGrow: 0.5 },
    { name: 'Tên bạn đọc', prop: 'tenBandoc', flexGrow: 1 },
    { name: 'SDT', prop: 'sdtBandoc', flexGrow: 0.5 },
    { name: 'Địa Chỉ', prop: 'diachiBandoc', flexGrow: 0.5 },
    { name: 'Ngày Sinh', prop: 'ngaysinhBandoc', flexGrow: 0.7 },
    { name: 'Ngày tạo Tk', prop: 'ngaytaotkBandoc', flexGrow: 0.7 },
    { name: 'Hạng', prop: 'hangBandoc', flexGrow: 0.7 },
    { name: 'Actions', prop: 'actions', flexGrow: 1},
  ];
  formGroup = this.fb.group({
    id: [''],
    maBandoc:['',Validators.required],
    tenBandoc:['',Validators.required],
    sdtBandoc:[''],
    diachiBandoc:[''],
    ngaysinhBandoc:[''],
    ngaytaotkBandoc:[''],
    hangBandoc:[''],
  });

  constructor(
    private fb: FormBuilder,
    private bandocService: BandocService,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
    this.prepareData();
  }
  prepareData() {
    this.getBandoc();
  }
  doSubmit() {
    console.log("hhhhhhhhhhh",this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
        return;
    }
    if (this.formGroup.getRawValue().id) {
     
      
        this.bandocService.updateBandoc(this.formGroup.getRawValue())
            .subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBandoc();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
    } else {
        this.bandocService.addBandoc(this.formGroup.getRawValue())
            .subscribe(_ => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getBandoc();
            }, error => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            });
    }

}
  getBandoc() {
    this.bandocService.getBandoc()
      .subscribe((next: any) => {
        console.log('next', next);
        this.items = next.data;
      });
  }
  edit(row: any) {
    console.log(row,'===');
    console.log(this.formGroup,'===');
    // if(row.trangThai===1){
    //   this.checked=true;
    // }else{
    //   this.checked=true;
    // }
    this.formGroup.patchValue(row); 
  }
  delete(id: any) {
    this.bandocService.deleteBandoc(id).subscribe({
      next: () => {
        this.toastrService.success(`Successful`);
        this.formGroup.reset();
        this.getBandoc();
      }, error: (error) => {
        this.toastrService.error(`Failed !!!`);
        console.error(error);
      }
    })
  }
}

