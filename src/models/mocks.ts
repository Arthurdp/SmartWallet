import { DayEntry } from '@models/DayEntry';
import { Entry } from "./Entry";
import { Historic } from "./Historic";

export class Mocks {

    historicMock: Historic =
        new Historic(
            0,
            0,
            0,
            [new DayEntry(
                new Date(),
                0,
                0,
                0,
                [
                    new Entry(0, "Salário", 2000, "", "Transferência Bancária", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "receita"),
                    new Entry(1, "Feira da semana", 200, "Mercado", "Cartão de crédito", new Date(Date.now() - (1000 * 60 * 2 ) - 2), "Alimentação", "despesa"),
                    new Entry(2, "Pastel", 3.50, "Barraquinha da Ju", "Cartão de crédito", new Date(Date.now() - (1000 * 60 * 3 ) - 3), "alimentação", "despesa")
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 6)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 6) - 1), "alimentação", "receita"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 6) - 2), "alimentação", "receita"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 6) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 6) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 6) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 5)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 5) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 5) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 5) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 5) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 5) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 4)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 4) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 4) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 4) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 4) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 3)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 3) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 3) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 3) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 3) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 2)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 2) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 2) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 2) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 2) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 1)),
                0,
                0,
                0,
                [
                    new Entry(0, "Almoço", 15, "Restaurante", "Dinheiro", new Date(Date.now() - (1000 * 60 * 60 * 24 * 1) - 1), "Alimentação", "despesa"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 8)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 8) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 8) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 8) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 8) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 8) - 5), "alimentação", "despesa"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 9)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 9) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 9) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 9) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 9) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 9) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 10)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 10) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 10) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 10) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 10) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 60 * 24 * 10) - 5), "alimentação", "receita"),
                ]
            ).updateDayData(),
            ]
        ).updateHistoricData();


    dayEntryMock: DayEntry =
        new DayEntry(
            new Date(),
            0,
            0,
            0,
            [
                new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 1), "alimentação", "receita"),
                new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 2), "alimentação", "receita"),
                new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 3), "alimentação", "despesa"),
                new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 4), "alimentação", "receita"),
                new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 5), "alimentação", "receita"),
            ].sort((a, b) => {
                return new Date(b.time).getTime() - new Date(a.time).getTime();
            })
        )


    entryMock: Entry =
        new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - 1), "alimentação", "receita");
}