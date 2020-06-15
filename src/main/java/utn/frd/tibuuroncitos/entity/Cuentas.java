/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utn.frd.tibuuroncitos.entity;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author daviddonayo
 */
@Entity
@Table(name = "cuentas")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Cuentas.findAll", query = "SELECT c FROM Cuentas c"),
    @NamedQuery(name = "Cuentas.findByNroCuenta", query = "SELECT c FROM Cuentas c WHERE c.nroCuenta = :nroCuenta"),
    @NamedQuery(name = "Cuentas.findByEstadoCuenta", query = "SELECT c FROM Cuentas c WHERE c.estadoCuenta = :estadoCuenta"),
    @NamedQuery(name = "Cuentas.findByBalance", query = "SELECT c FROM Cuentas c WHERE c.balance = :balance")})
public class Cuentas implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "nroCuenta")
    private Integer nroCuenta;
    @Basic(optional = false)
    @NotNull
    @Column(name = "estadoCuenta")
    private String estadoCuenta;
    @Basic(optional = false)
    @NotNull
    @Size(max = 255)
    
    @Column(name = "balance")
    private int balance;

    public Cuentas() {
    }

    public Cuentas(Integer nroCuenta) {
        this.nroCuenta = nroCuenta;
    }

    public Cuentas(Integer nroCuenta, String estadoCuenta, int balance) {
        this.nroCuenta = nroCuenta;
        this.estadoCuenta = estadoCuenta;
        this.balance = balance;
    }

    public Integer getNroCuenta() {
        return nroCuenta;
    }

    public void setNroCuenta(Integer nroCuenta) {
        this.nroCuenta = nroCuenta;
    }

    public String getEstadoCuenta() {
        return estadoCuenta;
    }

    public void setEstadoCuenta(String estadoCuenta) {
        this.estadoCuenta = estadoCuenta;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nroCuenta != null ? nroCuenta.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Cuentas)) {
            return false;
        }
        Cuentas other = (Cuentas) object;
        if ((this.nroCuenta == null && other.nroCuenta != null) || (this.nroCuenta != null && !this.nroCuenta.equals(other.nroCuenta))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "utn.frd.tibuuroncitos.entity.Cuentas[ nroCuenta=" + nroCuenta + " ]";
    }
    
}
