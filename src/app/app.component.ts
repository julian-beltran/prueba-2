import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Libros } from './_model/libros';
import { LibrosService } from './_service/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'title', 'body', 'ver'];
  dataSource = new MatTableDataSource<Libros>();

  @ViewChild("LibrosPaginator") paginator: MatPaginator;

  constructor(private librosService: LibrosService,
    public route: ActivatedRoute,) { }

    ngOnInit(): void {
      this.librosService.listar().subscribe(data =>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
}
