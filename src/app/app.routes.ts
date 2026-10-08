import { Routes } from '@angular/router';
 
export const routes: Routes = [
 {
        path:'escuela',
        children:[
            {
                path:'lista-Alumnos',
                loadComponent:()=>
                    import('./escuela/lista-alumnos/lista-alumnos').then(
                        (c)=>c.ListaAlumnos
                    )
            },
        ]
    },
    {
        path:'formulario',
        children:[
            {
                path:'usuarios',
                loadComponent:()=>
                    import('./formularios/usuario/usuarios').then(
                        (c)=>c.Usuarios
                    )
            },
            {
                path:'zodiaco',
                loadComponent:()=>
                    import('./formularios/zodiaco/zodiaco').then(
                        (c)=>c.Zodiaco
                    )
            }
        ]
    },
    {
        path:'', redirectTo: 'admin',pathMatch:'full'
    },
    {
        path:'**', redirectTo: 'admin'
    }
];