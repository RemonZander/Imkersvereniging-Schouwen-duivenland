import {Router as agendaRouter} from "express";
import {AgendaEntity} from "../../../sequelize/entities/AgendaEntity";

const router = agendaRouter();

router.get("/agenda", async (req, res, next) => {
    const agenda = new AgendaEntity();
    const data = await agenda.findall();

    res.json({
        agenda: data
    })
})

export default router;