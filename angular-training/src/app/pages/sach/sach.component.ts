import { SachService } from './../../shared/services/sach.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';
import { Page } from './../../shared/model/page';

@Component({
  selector: 'app-sach',
  templateUrl: './sach.component.html',
  styleUrls: ['./sach.component.scss']
})
export class SachComponent implements OnInit {

  items = [];
  page = new Page();
  columns = [
    { name: 'id', prop: 'id', flexGrow: 0.5 },
    { name: 'maSach', prop: 'maSach', flexGrow: 0.5 },
    { name: 'tenSach', prop: 'tenSach', flexGrow: 1 },
    { name: 'idNxb', prop: 'idNxb', flexGrow: 0.5 },
    { name: 'idTacgia', prop: 'idTacgia', flexGrow: 0.5 },
    { name: 'Chude', prop: 'chudeSạch', flexGrow: 0.7 },
    { name: 'Năm Xuất Bản', prop: 'namxuatban', flexGrow: 1 },
    { name: 'Mota', prop: 'moTaSach', flexGrow: 0.7 },
    { name: 'SLCL', prop: 'soluongconlai', flexGrow: 0.7 },
    { name: 'SLDM', prop: 'soluongdangmuon', flexGrow: 0.7 },
    { name: 'TSS', prop: 'tongsosach', flexGrow: 0.5},
    { name: 'Actions', prop: 'actions', flexGrow: 1},
  ];
  formGroup = this.fb.group({
    id: [''],
    maSach:['',Validators.required],
    tenSach:['',Validators.required],
    idNxb:[''],
    idTacgia:[''],
    chudeSạch:[''],
    namxuatban:[''],
    moTaSach:[''],
    soluongconlai:[''],
    soluongdangmuon: [''],
    tongsosach: [''],

  });

  constructor(
    private fb: FormBuilder,
    private sachService: SachService,
    private toastrService: ToastrService,

  ) { }

  ngOnInit(): void {
    this.prepareData();
  }
  prepareData() {
    this.getSach();
  }
  doSubmit() {
    console.log("hhhhhhhhhhh",this.formGroup.value);
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
        return;
    }
    if (this.formGroup.getRawValue().id) {
     
      
        this.sachService.updateSach(this.formGroup.getRawValue())
            .subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getSach();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
    } else {
        this.sachService.addSach(this.formGroup.getRawValue())
            .subscribe(_ => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getSach();
            }, error => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            });
    }

}
  getSach() {
    this.sachService.getSach()
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
    this.sachService.deleteSach(id).subscribe({
      next: () => {
        this.toastrService.success(`Successful`);
        this.formGroup.reset();
        this.getSach();
      }, error: (error) => {
        this.toastrService.error(`Failed !!!`);
        console.error(error);
      }
    })
  }
}

