/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utn.frd.tibuuroncitos.rest.services;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import utn.frd.tibuuroncitos.entity.Cuentas;
import utn.frd.tibuuroncitos.sessions.CuentasFacade;

/**
 *
 * @author Donayo David, Illera Ivan, Ardaiz Martina
 */
@Path("/cuenta")
public class CuentaRest {
    @EJB
    private CuentasFacade ejbCuentasFacade;
    
    //obtener todas las entidades
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<Cuentas> findAll(){
        return ejbCuentasFacade.findAll();
    }
    
    //crear entidades
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(Cuentas cuenta){
        ejbCuentasFacade.create(cuenta);
    }
    
    //actualizar entidades
    @PUT
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{id}")
    public void edit(@PathParam("id")long id, Cuentas cuenta){
        ejbCuentasFacade.edit(cuenta);
    }
    
    //eliminar entidades
    @DELETE
    @Consumes({MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN})
    @Path("/{id}")
    public void remove(@PathParam("id")long id){
        ejbCuentasFacade.remove(ejbCuentasFacade.find(id) );
    }
    
    //obtener una entidad por id
    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Cuentas findById(@PathParam("id")long id){
        return ejbCuentasFacade.find(id);
    }
}
