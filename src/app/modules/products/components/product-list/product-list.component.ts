import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { TableHeaders } from 'src/app/models/table.model';
import { ProductsService } from 'src/app/services/products.service';
import * as XLSX from 'xlsx';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  @ViewChild('modal')
  modal!: ElementRef;

  products: Partial<Product>[] = [];
  product: Partial<Product> = {};
  pageNumber: number = 0;
  productName = new FormControl();
  itemCount: number = 0;
  pagination: boolean = false;

  headers: TableHeaders[] = [
    { id: 'title', name: 'Producto' },
    { id: 'description', name: 'Descripción' },
    { id: 'price', name: 'Precio' },
    { id: 'brand', name: 'Marca' },
    { id: 'category',name: 'Categoría' },
    { id: 'stock',name: 'Stock' },
  ]
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts(0);
    this.pagination = true;
  }

  getProducts(item: number) {
    this.productsService.getProducts(item).subscribe({
      next: (data) => {
        this.products = data.products;
        this.itemCount = data.total;
      }
    })
  }

  eventPage(event: any) {
    this.pageNumber = event.detail;
    this.getProducts(event.detail);
  }

  search() {
    if(this.productName.value === '' || !this.productName.value){
      this.getProducts(this.pageNumber);
    } else {
      this.productsService.searchProducts(this.productName.value).subscribe({
        next: (data) => {
          this.products = data.products;
          this.itemCount = data.total;
        }
      })
    }
  }

  getProductById(id: number) {
    this.productsService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
      }
    })
  }

  openModal(event: any){
    this.getProductById(event.target.id)
    this.modal.nativeElement.isopen = true
  }

  exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    let html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html[0] };

    pdfMake.createPdf(documentDefinition).download();
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.products);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'Listado_de_productos.xlsx');
  }

}
