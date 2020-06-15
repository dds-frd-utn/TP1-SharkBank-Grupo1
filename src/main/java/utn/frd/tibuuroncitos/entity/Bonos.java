/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utn.frd.tibuuroncitos.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author daviddonayo
 */
@Entity
@Table(name = "bonos")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Bonos.findAll", query = "SELECT b FROM Bonos b"),
    @NamedQuery(name = "Bonos.findByNroBono", query = "SELECT b FROM Bonos b WHERE b.nroBono = :nroBono"),
    @NamedQuery(name = "Bonos.findByPrecioCompra", query = "SELECT b FROM Bonos b WHERE b.precioCompra = :precioCompra"),
    @NamedQuery(name = "Bonos.findByVencimiento", query = "SELECT b FROM Bonos b WHERE b.vencimiento = :vencimiento"),
    @NamedQuery(name = "Bonos.findByPrecioPago", query = "SELECT b FROM Bonos b WHERE b.precioPago = :precioPago")})
public class Bonos implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "nroBono")
    private Integer nroBono;
    @Basic(optional = false)
    @NotNull
    @Column(name = "precioCompra")
    private float precioCompra;
    @Basic(optional = false)
    @NotNull
    @Column(name = "vencimiento")
    @Temporal(TemporalType.DATE)
    private Date vencimiento;
    @Basic(optional = false)
    @NotNull
    @Column(name = "precioPago")
    private float precioPago;

    public Bonos() {
    }

    public Bonos(Integer nroBono) {
        this.nroBono = nroBono;
    }

    public Bonos(Integer nroBono, float precioCompra, Date vencimiento, float precioPago) {
        this.nroBono = nroBono;
        this.precioCompra = precioCompra;
        this.vencimiento = vencimiento;
        this.precioPago = precioPago;
    }

    public Integer getNroBono() {
        return nroBono;
    }

    public void setNroBono(Integer nroBono) {
        this.nroBono = nroBono;
    }

    public float getPrecioCompra() {
        return precioCompra;
    }

    public void setPrecioCompra(float precioCompra) {
        this.precioCompra = precioCompra;
    }

    public Date getVencimiento() {
        return vencimiento;
    }

    public void setVencimiento(Date vencimiento) {
        this.vencimiento = vencimiento;
    }

    public float getPrecioPago() {
        return precioPago;
    }

    public void setPrecioPago(float precioPago) {
        this.precioPago = precioPago;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nroBono != null ? nroBono.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Bonos)) {
            return false;
        }
        Bonos other = (Bonos) object;
        if ((this.nroBono == null && other.nroBono != null) || (this.nroBono != null && !this.nroBono.equals(other.nroBono))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "utn.frd.tibuuroncitos.entity.Bonos[ nroBono=" + nroBono + " ]";
    }
    
}
