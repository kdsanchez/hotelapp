import { Routes, RouterModule} from '@angular/router';
import { BarChartComponent } from './graficas/bar-chart/bar-chart.component';

//import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { CalendarioComponent } from './reserva/calendario/calendario.component';
import { FacturaComponent } from './factureo/factura/factura.component';
import { ArchivoDeFacturaComponent } from './factureo/archivo-de-factura/archivo-de-factura.component';
import { GaleriasComponent } from './galeria/galerias/galerias.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductoComponent } from './components/products/producto/producto.component';
import { ListadoComponent } from './usuarios/empleados/listado/listado.component';
import { EmpleadoComponent } from './empleados/employees/empleado/empleado.component';
import { ListaComponent } from './usuarios/empleados/lista/lista.component';


const appRutas: Routes = [
   // Carpeta de trabajo
  {path: 'clientes', component: ListadoComponent},
 {path: 'registrocliente', component: ListaComponent},
  {path: 'empleados', component: EmpleadoComponent},
  //{path: 'nuevo', component: NuevoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'archivo-factura', component: ArchivoDeFacturaComponent},
  {path: 'galeria', component: GaleriasComponent},
  // {path: 'productos', component: ProductsComponent},
  {path: 'productos', component: ProductoComponent}
  // {path: '', pathMatch: 'full', redirectTo: 'lista'}


  // Rutas para gráficos
  // {path: 'barras', component: BarChartComponent}
];

export const routingComponents = RouterModule.forRoot(appRutas); // [ListaComponent];
export class AppRoutingModule { }

