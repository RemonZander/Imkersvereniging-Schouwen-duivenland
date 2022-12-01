import {
    AgendaInput, AgendaOutput, Agenda
} from "./Classes/Agenda";

class AgendaEntity extends Agenda {

    public async create(payload: Partial<AgendaInput>): Promise<AgendaOutput> {
        return AgendaEntity.create(payload)
    }

    public async findall(): Promise<AgendaEntity[]> {
        return AgendaEntity.findAll()
    }

    public async delete(payload: Partial<AgendaInput>): Promise<number> {
        return AgendaEntity.destroy({
            where: payload
        })
    }

}