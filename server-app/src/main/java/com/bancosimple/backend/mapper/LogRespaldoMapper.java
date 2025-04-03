package com.bancosimple.backend.mapper;

import com.bancosimple.backend.dto.LogRespaldoDTO;
import com.bancosimple.backend.model.LogRespaldo;

public class LogRespaldoMapper {

    public static LogRespaldoDTO toDTO(LogRespaldo entity) {
        return new LogRespaldoDTO(
                entity.getId(),
                entity.getUsuarioAccion(),
                entity.getTabla(),
                entity.getIdRegistro(),
                entity.getTipoOperacion(),
                entity.getDatosAnteriores(),
                entity.getDatosNuevos(),
                entity.getFecha(),
                entity.getIpOrigen()
        );
    }

    public static LogRespaldo toEntity(LogRespaldoDTO dto) {
        return new LogRespaldo(
                dto.getId(),
                dto.getUsuarioAccion(),
                dto.getTabla(),
                dto.getIdRegistro(),
                dto.getTipoOperacion(),
                dto.getDatosAnteriores(),
                dto.getDatosNuevos(),
                dto.getFecha(),
                dto.getIpOrigen()
        );
    }
}
