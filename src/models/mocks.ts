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
                    new Entry(0, "Salário", 2000, "", "Transferência Bancária", new Date(Date.now() + (1000 * 60 * 60 * 8) - 1), "alimentação", "receita"),
                    new Entry(1, "Feira da semana", 200, "Mercado", "Cartão de crédito", new Date(Date.now() + (1000 * 60 * 60 * 20) - 2), "Alimentação", "despesa"),
                    new Entry(2, "Pastel", 3.50, "Barraquinha da Ju", "Cartão de crédito", new Date(Date.now() + (1000 * 60 * 60 * 9) - 3), "alimentação", "despesa")
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 6)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "receita"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "receita"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 5)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 4)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "receita"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 3)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 2)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 1)),
                0,
                0,
                0,
                [
                    new Entry(0, "Almoço", 15, "Restaurante", "Dinheiro", new Date(Date.now() - (1000 * 60 * 60 * 12) - 1), "Alimentação", "despesa"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 8)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "despesa"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 9)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "receita"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "despesa"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            new DayEntry(
                new Date(Date.now() - (1000 * 60 * 60 * 24 * 10)),
                0,
                0,
                0,
                [
                    new Entry(0, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 1) - 1), "alimentação", "receita"),
                    new Entry(1, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 2) - 2), "alimentação", "despesa"),
                    new Entry(2, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 3) - 3), "alimentação", "receita"),
                    new Entry(3, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 4) - 4), "alimentação", "receita"),
                    new Entry(4, "coxinha", 3.50, "seu olavo", "cartão de crédito", new Date(Date.now() - (1000 * 60 * 5) - 5), "alimentação", "receita"),
                ].sort((a, b) => {
                    return new Date(b.time).getTime() - new Date(a.time).getTime();
                })
            ).calculateResume(),
            ].sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
        ).calculateResume();


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