import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcumbComponent } from './shared/breadcumb/breadcumb.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './graficas/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './graficas/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './graficas/line-chart/line-chart.component';
import { HttpModule } from '@angular/http';

// rutas
import { routingComponents } from './app-routing.module';


import { CalendarioComponent } from './reserva/calendario/calendario.component';
import { FacturaComponent } from './factureo/factura/factura.component';
import { ArchivoDeFacturaComponent } from './factureo/archivo-de-factura/archivo-de-factura.component';
import { GaleriasComponent } from './galeria/galerias/galerias.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// componentes
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductoComponent } from './components/products/producto/producto.component';

import { EmpleadosComponent } from './usuarios/empleados/empleados.component';
import { ListadoComponent } from './usuarios/empleados/listado/listado.component';
import { ListaComponent } from './usuarios/empleados/lista/lista.component';
import { NuevoComponent } from './usuarios/empleados/nuevo/nuevo.component';

import { EmployeeComponent } from './empleados/employees/employee/employee.component';
import { EmployeeListComponent } from './empleados/employees/employee-list/employee-list.component';
import { EmployeesComponent } from './empleados/employees/employees.component';
import { EmpleadoComponent } from './empleados/employees/empleado/empleado.component';

// services
import { ProductService } from './services/product.service';
import { ListaService } from './services/lista.service';
import { EmployeeService } from './services/employee.service';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiSailsService } from './services/api-sails.service';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { RegistroComponent } from './clientes/clientes/registro/registro.component';
import { VistaComponent } from './clientes/clientes/vista/vista.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcumbComponent,
    DashboardComponent,

    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent,

    CalendarioComponent,
    FacturaComponent,
    ArchivoDeFacturaComponent,

    GaleriasComponent,

    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductoComponent,

    EmpleadosComponent,
    
    NuevoComponent,
    ListadoComponent,
    ListaComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmpleadoComponent,
    ClientesComponent,
    RegistroComponent,
    VistaComponent
    

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    routingComponents,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule


  ],
  providers: [
    ProductService,
    ListaService,
    EmployeeService,
    ApiSailsService
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }
