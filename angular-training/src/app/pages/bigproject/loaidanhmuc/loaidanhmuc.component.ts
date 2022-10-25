import {Component, OnInit} from '@angular/core';
import {Page} from "../../../shared/model/page";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";
import {LoaidanhmucService} from "../../../shared/services/loaidanhmuc.service";
import {DanhMucService} from 'src/app/shared/services/danhmuc.service';
import {MatDialog} from '@angular/material/dialog';
import { number } from 'echarts';

@Component({
    selector: 'app-loaidanhmuc',
    templateUrl: './loaidanhmuc.component.html',
    styleUrls: ['./loaidanhmuc.component.scss']
})
export class LoaidanhmucComponent implements OnInit {

    items = [];
    limit = [];
    page = new Page();
    page1 = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Mã', prop: 'code', flexGrow: 3},
        {name: 'Tên Tiếng Việt', prop: 'nametv', flexGrow: 3},
        {name: 'Tên Tiếng Anh', prop: 'nameen', flexGrow: 3},
        {name: 'Ngày Hiệu Lực', prop: 'effectivedate', flexGrow: 3},
        {name: 'Ngày Hết Hiệu Lực', prop: 'expirationdate', flexGrow: 3},
        {name: 'Trạng Thái', prop: 'status', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];
    columns1 = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'MaDanhMuc', prop: 'maDm', flexGrow: 1.5},
        {name: 'Ma', prop: 'code', flexGrow: 1.5},
        {name: 'TênTV', prop: 'nametv', flexGrow: 2},
        {name: 'TênEN', prop: 'nameen', flexGrow: 2},
        {name: 'Thứ Tự', prop: 'thutu', flexGrow: 3},
        {name: 'Group', prop: 'nhom', flexGrow: 2},
        {name: 'Ngày Hiệu Lựu', prop: 'effectivedate', flexGrow: 2},
        {name: 'Ngày Hết Hiệu Lực', prop: 'effectivedate', flexGrow: 2},
        {name: 'Trạng Thái', prop: 'status', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];


    myGroup = this.fb.group( {
        id:'',
        ma: ['', [Validators.required]],
        tenTv: ['', [Validators.required]],
        tenEn: ['', [Validators.required]],
        ngayHl: ['', [Validators.required]],
        ngayHhl: ['', [Validators.required]],
        trangThai: ['', [Validators.required]]
    });

    constructor(
        private fb: FormBuilder,
        private fb1: FormBuilder,
        private loaidanhmucService: LoaidanhmucService,
        private toastrService: ToastrService,
        private danhMucService: DanhMucService,
    ) {
    }

    ngOnInit(): void {
        this.prepareData();
        this.getLDM1();
    }

    prepareData() {
        this.getLoaiDanhMuc();
        this.getDanhMuc1();
    }

    doSubmit() {
        this.myGroup.markAllAsTouched();
        if (this.myGroup.invalid) {
            return;
        }
        if (this.myGroup.value.ngayHl > this.myGroup.value.ngayHhl) {
            this.toastrService.error('Ngày hiệu lực phải nhỏ hơn ngày hết hiệu lực');
            return;
        }
        // for (let i = 0; i < this.items.length; i++) {
        //     if (this.myGroup.value.ma === this.myGroup.value.ma) {
        //         this.toastrService.error('Mã đã tồn tại');
        //         this.resetForm();
        //         return;
        //     }
        // }
        if (this.myGroup.getRawValue().id) {
            this.loaidanhmucService.updateLoaiDanhMuc(
                this.myGroup.getRawValue()
            ).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.myGroup.reset();
                    this.getLoaiDanhMuc();
                },
                error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                },
            });
        } else {
            this.myGroup.value.id =0
            console.log('mygourp',this.myGroup.getRawValue());
            
            this.loaidanhmucService.addLoaiDanhMuc(
               
                this.myGroup.getRawValue()
               
            ).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.myGroup.reset();
                    this.getLoaiDanhMuc();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }


    getLoaiDanhMuc() {
        this.loaidanhmucService.getLoaiDanhMuc().subscribe((next: any) => {
            console.log('next LDM', next);
            this.items = next.data;
        });
    }

    edit(row: any) {
        this.myGroup.patchValue(row);
    }


    delete(id: number) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.loaidanhmucService.deleteLoaiDanhMuc(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.myGroup.reset();
                        this.getLoaiDanhMuc();
                    },
                    error: (error) => {
                        this.toastrService.error('Failed !!!');
                        console.error(error);
                    },
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    resetForm() {
        this.myGroup.reset();
        this.myGroup.value.id = 0;
    }

    itemsDM = [
        // {
        //     code
        //     : 
        //     '',
        //     effectivedate
        //     : 
        //     '',
        //     exprrationdate
        //     : 
        //     '',
        //     id
        //     : 
        //     1,
        //     nameen
        //     : 
        //     "tuu",
        //     nametv
        //     : 
        //     "tu",
        //     nhom
        //     : 
        //     "2",
        //     thutu
        //     : 
        //     1
        // }
    ];
    itemDM= [
        {id:number,nametv: ''}
    ];
    

    myGroup1 = this.fb.group({
        id: [''],
        maDm: ['', [Validators.required]],
        ma: ['', [Validators.required]],
        tenTv: ['', [Validators.required]],
        tenEn: ['', [Validators.required]],
        thuTu: [''],
        nhom: [''],
        ngayHl: ['', [Validators.required]],
        ngayHhl: ['', [Validators.required]],
        trangThai: ['', [Validators.required]],
    });

    getLDM1() {
        this.loaidanhmucService.getLoaiDanhMuc().subscribe((next: any) => {
            console.log('next LDM', next);
            this.itemDM = next.data;
        });
    }

    doSubmit1() {
        this.myGroup1.markAllAsTouched();
        if (this.myGroup1.invalid) {
            return;
        }
        if (this.myGroup1.value.ngayHl > this.myGroup1.value.ngayHhl) {
            this.toastrService.error('Ngày hiệu lực phải nhỏ hơn ngày hết hiệu lực');
            return;
        }
        if (this.myGroup1.getRawValue().id) {
            this.danhMucService.updateDanhMuc(this.myGroup1.getRawValue()).subscribe(
                {
                    next: () => {
                        this.toastrService.success(`Successful`);
                        this.myGroup1.reset();
                        this.getDanhMuc1();
                    },
                    error: (error) => {
                        this.toastrService.error(`Failed !!!`);
                        console.error(error);
                    },
                }
            );
        } else {
            this.danhMucService.addDanhMuc(this.myGroup.getRawValue()).subscribe(
                (_) => {
                    this.toastrService.success(`Successful`);
                    this.myGroup.reset();
                    this.getDanhMuc1();
                },
                (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            );
        }
    }

    getDanhMuc1() {
        this.danhMucService.getDanhMuc().subscribe((next: any) => {
            console.log('next DM', next);
            this.itemsDM = next.data;
        });
    }

    edit1(row: any) {
        this.myGroup1.patchValue({
            id: row.id,
            maDm: row.maDm,
            ma: row.ma,
            tenTv: row.tenTv,
            tenEn: row.tenEn,
            thuTu: row.thuTu,
            nhom: row.nhom,
            ngayHl: row.ngayHl,
            ngayHhl: row.ngayHhl,
            trangThai: row.trangThai,

        });
    }

    delete1(id: any) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.danhMucService.deleteDanhMuc(id).subscribe({
                    next: () => {
                        this.toastrService.success('Successful');
                        this.myGroup1.reset();
                        this.getDanhMuc1();
                    },
                    error: (error) => {
                        this.toastrService.error('Failed !!!');
                        console.error(error);
                    },
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    resetForm1() {
        //dosubmit reset

        this.myGroup1.reset();
    }

}
