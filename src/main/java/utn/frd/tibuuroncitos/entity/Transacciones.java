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
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author daviddonayo
 */
@Entity
@Table(name = "transacciones")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Transacciones.findAll", query = "SELECT t FROM Transacciones t"),
    @NamedQuery(name = "Transacciones.findByNroTrans", query = "SELECT t FROM Transacciones t WHERE t.nroTrans = :nroTrans"),
    @NamedQuery(name = "Transacciones.findByMonto", query = "SELECT t FROM Transacciones t WHERE t.monto = :monto"),
    @NamedQuery(name = "Transacciones.findByFecha", query = "SELECT t FROM Transacciones t WHERE t.fecha = :fecha"),
    @NamedQuery(name = "Transacciones.findByTipoTrans", query = "SELECT t FROM Transacciones t WHERE t.tipoTrans = :tipoTrans"),
    @NamedQuery(name = "Transacciones.findByEstadoTrans", query = "SELECT t FROM Transacciones t WHERE t.estadoTrans = :estadoTrans")})
public class Transacciones implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "nroTrans")
    private Integer nroTrans;
    @Basic(optional = false)
    @NotNull
    @Column(name = "monto")
    private int monto;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha")
    @Temporal(TemporalType.DATE)
    private Date fecha;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "tipoTrans")
    private String tipoTrans;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "estadoTrans")
    private String estadoTrans;

    public Transacciones() {
    }

    public Transacciones(Integer nroTrans) {
        this.nroTrans = nroTrans;
    }

    public Transacciones(Integer nroTrans, int monto, Date fecha, String tipoTrans, String estadoTrans) {
        this.nroTrans = nroTrans;
        this.monto = monto;
        this.fecha = fecha;
        this.tipoTrans = tipoTrans;
        this.estadoTrans = estadoTrans;
    }

    public Integer getNroTrans() {
        return nroTrans;
    }

    public void setNroTrans(Integer nroTrans) {
        this.nroTrans = nroTrans;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getTipoTrans() {
        return tipoTrans;
    }

    public void setTipoTrans(String tipoTrans) {
        this.tipoTrans = tipoTrans;
    }

    public String getEstadoTrans() {
        return estadoTrans;
    }

    public void setEstadoTrans(String estadoTrans) {
        this.estadoTrans = estadoTrans;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nroTrans != null ? nroTrans.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Transacciones)) {
            return false;
        }
        Transacciones other = (Transacciones) object;
        if ((this.nroTrans == null && other.nroTrans != null) || (this.nroTrans != null && !this.nroTrans.equals(other.nroTrans))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "utn.frd.tibuuroncitos.entity.Transacciones[ nroTrans=" + nroTrans + " ]";
    }
    
}
