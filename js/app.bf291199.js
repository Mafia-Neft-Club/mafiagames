(function (e) {
    function t(t) {
        for (var s, n, d = t[0], o = t[1], r = t[2], m = 0, u = []; m < d.length; m++) (n = d[m]), a[n] && u.push(a[n][0]), (a[n] = 0);
        for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
        c && c(t);
        while (u.length) u.shift()();
        return i.push.apply(i, r || []), l();
    }
    function l() {
        for (var e, t = 0; t < i.length; t++) {
            for (var l = i[t], s = !0, d = 1; d < l.length; d++) {
                var o = l[d];
                0 !== a[o] && (s = !1);
            }
            s && (i.splice(t--, 1), (e = n((n.s = l[0]))));
        }
        return e;
    }
    var s = {},
        a = { app: 0 },
        i = [];
    function n(t) {
        if (s[t]) return s[t].exports;
        var l = (s[t] = { i: t, l: !1, exports: {} });
        return e[t].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
    }
    (n.m = e),
        (n.c = s),
        (n.d = function (e, t, l) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: l });
        }),
        (n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var l = Object.create(null);
            if ((n.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var s in e)
                    n.d(
                        l,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return l;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e["default"];
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/");
    var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        o = d.push.bind(d);
    (d.push = t), (d = d.slice());
    for (var r = 0; r < d.length; r++) t(d[r]);
    var c = o;
    i.push([0, "chunk-vendors"]), l();
})({
    0: function (e, t, l) {
        e.exports = l("56d7");
    },
    "034f": function (e, t, l) {
        "use strict";
        var s = l("1356"),
            a = l.n(s);
        a.a;
    },
    1356: function (e, t, l) {},
    "1e62": function (e, t, l) {},
    "3a36": function (e, t, l) {},
    "56d7": function (e, t, l) {
        "use strict";
        l.r(t);
        l("cadf"), l("551c"), l("f751"), l("097d");
        var s = l("2b0e"),
            a = function () {
                var e = this,
                    t = e.$createElement,
                    l = e._self._c || t;
                return l("v-app", { attrs: { id: "app" } }, [l("Games")], 1);
            },
            i = [],
            n = function () {
                var e = this,
                    t = e.$createElement,
                    l = e._self._c || t;
                return l(
                    "md-tabs",
                    [
                        l("md-tab", { attrs: { id: "tab-games", "md-label": "Игры" } }, [
                            l("div", { staticClass: "games md-content" }, [
                                l("div", { staticClass: "md-layout" }, [
                                    l(
                                        "div",
                                        { staticClass: "md-layout-item" },
                                        [
                                            l("md-table", {
                                                attrs: { "md-sort": "id", "md-sort-order": "desc", "md-card": "", "md-fixed-header": "" },
                                                on: { "md-selected": e.onSelect },
                                                scopedSlots: e._u([
                                                    {
                                                        key: "md-table-row",
                                                        fn: function (t) {
                                                            var s = t.item;
                                                            return l(
                                                                "md-table-row",
                                                                { attrs: { "md-selectable": "single" } },
                                                                [
                                                                    l("md-table-cell", { attrs: { "md-label": "№", "md-numeric": "", "md-sort-by": "id" } }, [e._v(e._s(s.id))]),
                                                                    l("md-table-cell", { staticClass: "date", attrs: { "md-label": "Дата", "md-sort-by": "date" } }, [e._v(e._s(s.date))]),
                                                                    l("md-table-cell", { attrs: { "md-label": "1" } }, [e._v(e._s(e.getPlayerName(s.players[0])))]),
                                                                    l("md-table-cell", { attrs: { "md-label": "2" } }, [e._v(e._s(e.getPlayerName(s.players[1])))]),
                                                                    l("md-table-cell", { attrs: { "md-label": "3" } }, [e._v(e._s(e.getPlayerName(s.players[2])))]),
                                                                    l("md-table-cell", { attrs: { "md-label": "4" } }, [e._v(e._s(e.getPlayerName(s.players[3])))]),
                                                                    l("md-table-cell", { attrs: { "md-label": "5" } }, [e._v(e._s(e.getPlayerName(s.players[4])))]),
                                                                ],
                                                                1
                                                            );
                                                        },
                                                    },
                                                ]),
                                                model: {
                                                    value: e.games,
                                                    callback: function (t) {
                                                        e.games = t;
                                                    },
                                                    expression: "games",
                                                },
                                            }),
                                            l("div", { staticClass: "md-layout" }, [
                                                l(
                                                    "div",
                                                    { staticClass: "md-layout-item md-size-33" },
                                                    [
                                                        l(
                                                            "md-field",
                                                            [
                                                                l("label", [e._v("Файл с данными игр")]),
                                                                l("md-file", {
                                                                    attrs: { accept: "application/json" },
                                                                    on: {
                                                                        "md-change": function (t) {
                                                                            return e.importDatabase(t);
                                                                        },
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                l("div", { staticClass: "md-layout-item" }, [l("md-button", { staticClass: "md-raised first-button", on: { click: e.exportDatabase } }, [e._v("Выгрузить базу")])], 1),
                                            ]),
                                            l("div", { staticClass: "md-layout" }, [
                                                l(
                                                    "div",
                                                    { staticClass: "md-layout-item" },
                                                    [
                                                        l("md-button", { staticClass: "md-raised", on: { click: e.saveToStorage } }, [e._v("Сохранить базу")]),
                                                        l("md-button", { staticClass: "md-raised", on: { click: e.loadFromStorage } }, [e._v("Загрузить базу")]),
                                                    ],
                                                    1
                                                ),
                                            ]),
                                            l("div", { staticClass: "md-layout" }, [
                                                l(
                                                    "div",
                                                    { staticClass: "md-layout-item md-size-33" },
                                                    [
                                                        l(
                                                            "v-menu",
                                                            {
                                                                attrs: { "close-on-content-click": !1, "nudge-right": 40, transition: "scale-transition", "offset-y": "", "min-width": "290px" },
                                                                scopedSlots: e._u([
                                                                    {
                                                                        key: "activator",
                                                                        fn: function (t) {
                                                                            var s = t.on;
                                                                            return [
                                                                                l(
                                                                                    "v-text-field",
                                                                                    e._g(
                                                                                        {
                                                                                            attrs: { label: "Месяц игр", readonly: "" },
                                                                                            model: {
                                                                                                value: e.databaseSettings.gamesMonth,
                                                                                                callback: function (t) {
                                                                                                    e.$set(e.databaseSettings, "gamesMonth", t);
                                                                                                },
                                                                                                expression: "databaseSettings.gamesMonth",
                                                                                            },
                                                                                        },
                                                                                        s
                                                                                    )
                                                                                ),
                                                                            ];
                                                                        },
                                                                    },
                                                                ]),
                                                            },
                                                            [
                                                                l("v-date-picker", {
                                                                    attrs: { "no-title": "", type: "month", locale: "ru" },
                                                                    model: {
                                                                        value: e.databaseSettings.gamesMonth,
                                                                        callback: function (t) {
                                                                            e.$set(e.databaseSettings, "gamesMonth", t);
                                                                        },
                                                                        expression: "databaseSettings.gamesMonth",
                                                                    },
                                                                }),
                                                            ],
                                                            1
                                                        ),
                                                    ],
                                                    1
                                                ),
                                                l("div", { staticClass: "md-layout-item" }, [l("md-button", { staticClass: "md-raised", on: { click: e.newMonth } }, [e._v("Новый месяц")])], 1),
                                            ]),
                                        ],
                                        1
                                    ),
                                    l("div", { staticClass: "md-layout-item game" }, [
                                        l("div", { staticClass: "md-layout game-header" }, [
                                            e.selected.id ? l("div", { staticClass: "md-layout-item" }, [e._v("Игра №" + e._s(e.selected.id))]) : e._e(),
                                            e.selected.id ? e._e() : l("div", { staticClass: "md-layout-item" }, [e._v("Новая Игра")]),
                                        ]),
                                        l("div", { staticClass: "md-layout" }, [
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 0, players: e.players, selectedRole: e.selectedRoles[0], selectedPoint: e.selectedPoints[0] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 0);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 0);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[0],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 0, t);
                                                                },
                                                                expression: "selected.players[0]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 1, players: e.players, selectedRole: e.selectedRoles[1], selectedPoint: e.selectedPoints[1] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 1);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 1);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[1],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 1, t);
                                                                },
                                                                expression: "selected.players[1]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 2, players: e.players, selectedRole: e.selectedRoles[2], selectedPoint: e.selectedPoints[2] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 2);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 2);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[2],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 2, t);
                                                                },
                                                                expression: "selected.players[2]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 3, players: e.players, selectedRole: e.selectedRoles[3], selectedPoint: e.selectedPoints[3] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 3);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 3);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[3],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 3, t);
                                                                },
                                                                expression: "selected.players[3]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 4, players: e.players, selectedRole: e.selectedRoles[4], selectedPoint: e.selectedPoints[4] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 4);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 4);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[4],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 4, t);
                                                                },
                                                                expression: "selected.players[4]",
                                                            },
                                                        })
                                                        : e._e(),
                                                ],
                                                1
                                            ),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 5, players: e.players, selectedRole: e.selectedRoles[5], selectedPoint: e.selectedPoints[5] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 5);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 5);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[5],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 5, t);
                                                                },
                                                                expression: "selected.players[5]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 6, players: e.players, selectedRole: e.selectedRoles[6], selectedPoint: e.selectedPoints[6] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 6);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 6);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[6],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 6, t);
                                                                },
                                                                expression: "selected.players[6]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 7, players: e.players, selectedRole: e.selectedRoles[7], selectedPoint: e.selectedPoints[7] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 7);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 7);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[7],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 7, t);
                                                                },
                                                                expression: "selected.players[7]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 8, players: e.players, selectedRole: e.selectedRoles[8], selectedPoint: e.selectedPoints[8] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 8);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 8);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[8],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 8, t);
                                                                },
                                                                expression: "selected.players[8]",
                                                            },
                                                        })
                                                        : e._e(),
                                                    e.renderComponent
                                                        ? l("PlayerSelector", {
                                                            attrs: { index: 9, players: e.players, selectedRole: e.selectedRoles[9], selectedPoint: e.selectedPoints[9] },
                                                            on: {
                                                                selectedRole: function (t) {
                                                                    return e.updateSelectedRole(t, 9);
                                                                },
                                                                selectedPoint: function (t) {
                                                                    return e.updateSelectedPoint(t, 9);
                                                                },
                                                            },
                                                            model: {
                                                                value: e.selected.players[9],
                                                                callback: function (t) {
                                                                    e.$set(e.selected.players, 9, t);
                                                                },
                                                                expression: "selected.players[9]",
                                                            },
                                                        })
                                                        : e._e(),
                                                ],
                                                1
                                            ),
                                        ]),
                                        l("div", { staticClass: "md-layout" }, [
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    l(
                                                        "v-menu",
                                                        {
                                                            attrs: { "close-on-content-click": !1, "nudge-right": 40, transition: "scale-transition", "offset-y": "", "min-width": "290px" },
                                                            scopedSlots: e._u([
                                                                {
                                                                    key: "activator",
                                                                    fn: function (t) {
                                                                        var s = t.on;
                                                                        return [
                                                                            l(
                                                                                "v-text-field",
                                                                                e._g(
                                                                                    {
                                                                                        attrs: { label: "Дата игры", readonly: "" },
                                                                                        model: {
                                                                                            value: e.selected.date,
                                                                                            callback: function (t) {
                                                                                                e.$set(e.selected, "date", t);
                                                                                            },
                                                                                            expression: "selected.date",
                                                                                        },
                                                                                    },
                                                                                    s
                                                                                )
                                                                            ),
                                                                        ];
                                                                    },
                                                                },
                                                            ]),
                                                        },
                                                        [
                                                            l("v-date-picker", {
                                                                attrs: { "no-title": "", locale: "ru" },
                                                                model: {
                                                                    value: e.selected.date,
                                                                    callback: function (t) {
                                                                        e.$set(e.selected, "date", t);
                                                                    },
                                                                    expression: "selected.date",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    l("label", [e._v("Первый убитый")]),
                                                    l("model-list-select", {
                                                        attrs: { list: e.selectPlayerOptions, "option-value": "index", "option-text": "label" },
                                                        model: {
                                                            value: e.selected.firstKilled,
                                                            callback: function (t) {
                                                                e.$set(e.selected, "firstKilled", t);
                                                            },
                                                            expression: "selected.firstKilled",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    l("label", [e._v("Лучший ход")]),
                                                    l("model-list-select", {
                                                        attrs: { list: e.firstKilledGuessPointsOptions, "option-value": "value", "option-text": "label" },
                                                        model: {
                                                            value: e.selected.firstKilledGuessPoints,
                                                            callback: function (t) {
                                                                e.$set(e.selected, "firstKilledGuessPoints", t);
                                                            },
                                                            expression: "selected.firstKilledGuessPoints",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    l("label", [e._v("Победа")]),
                                                    l("model-list-select", {
                                                        attrs: { list: e.winGameOptions, "option-value": "value", "option-text": "label" },
                                                        model: {
                                                            value: e.selected.cityWin,
                                                            callback: function (t) {
                                                                e.$set(e.selected, "cityWin", t);
                                                            },
                                                            expression: "selected.cityWin",
                                                        },
                                                    }),
                                                ],
                                                1
                                            ),
                                        ]),
                                        l("div", { staticClass: "md-layout" }, [
                                            l("div", { staticClass: "md-layout-item" }, [l("md-button", { staticClass: "md-raised first-button", on: { click: e.setControlsToNewGame } }, [e._v("Новая игра")])], 1),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item edit-buttons" },
                                                [
                                                    l("md-button", { staticClass: "md-raised md-primary", on: { click: e.saveGame } }, [e._v("Сохранить")]),
                                                    l("md-button", { staticClass: "md-raised last-button", on: { click: e.reloadEdit } }, [e._v("Сбросить")]),
                                                ],
                                                1
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                        l(
                            "md-tab",
                            { attrs: { id: "tab-players", "md-label": "Игроки" } },
                            [
                                l("Players", {
                                    attrs: { players: e.players, games: e.games, databaseSettings: e.databaseSettings },
                                    on: {
                                        removePlayer: function (t) {
                                            return e.removePlayer(t);
                                        },
                                    },
                                }),
                            ],
                            1
                        ),
                    ],
                    1
                );
            },
            d = [],
            o = (l("7514"), l("7f7f"), l("6c7b"), l("0393")),
            r = function () {
                var e = this,
                    t = e.$createElement,
                    l = e._self._c || t;
                return l("div", { staticClass: "players md-content" }, [
                    e.mounted
                        ? l("div", { staticClass: "md-layout" }, [
                            l(
                                "div",
                                { staticClass: "md-layout-item md-size-35" },
                                [
                                    l("v-text-field", {
                                        attrs: { label: "Поиск игрока", "single-line": "", "hide-details": "" },
                                        model: {
                                            value: e.search,
                                            callback: function (t) {
                                                e.search = t;
                                            },
                                            expression: "search",
                                        },
                                    }),
                                    l("br"),
                                    l(
                                        "v-layout",
                                        { staticStyle: { height: "80vh" }, attrs: { column: "" } },
                                        [
                                            l(
                                                "v-flex",
                                                { staticStyle: { overflow: "auto" } },
                                                [
                                                    l("v-data-table", {
                                                        attrs: { headers: e.headers, items: e.players, search: e.search, "sort-by": ["name"], "sort-desc": [!1], "disable-pagination": "", "hide-default-footer": "", "must-sort": "" },
                                                        on: { "click:row": e.onSelect },
                                                        scopedSlots: e._u(
                                                            [
                                                                {
                                                                    key: "item.name",
                                                                    fn: function (t) {
                                                                        var l = t.item;
                                                                        return [e._v(e._s(l.name))];
                                                                    },
                                                                },
                                                            ],
                                                            null,
                                                            !1,
                                                            2014703663
                                                        ),
                                                    }),
                                                ],
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            l("div", { staticClass: "md-layout-item" }, [
                                l("div", { staticClass: "md-layout player-edit-header" }, [
                                    e.selectedPlayer ? l("div", { staticClass: "md-layout-item" }, [e._v(e._s(e.selectedPlayer.name))]) : e._e(),
                                    e.selectedPlayer ? e._e() : l("div", { staticClass: "md-layout-item" }, [e._v("*Новый игрок*")]),
                                ]),
                                l("div", { staticClass: "md-layout previous-names" }, [
                                    l(
                                        "div",
                                        { staticClass: "md-layout-item md-size-50" },
                                        [
                                            l("h4", [e._v("Предыдущие ники")]),
                                            e.selectedPlayer
                                                ? l("md-table", {
                                                    attrs: { "md-sort": "date", "md-sort-order": "desc", "md-card": "", "md-fixed-header": "" },
                                                    scopedSlots: e._u(
                                                        [
                                                            {
                                                                key: "md-table-row",
                                                                fn: function (t) {
                                                                    var s = t.item;
                                                                    return l(
                                                                        "md-table-row",
                                                                        { attrs: { "md-selectable": "single" } },
                                                                        [
                                                                            l("md-table-cell", { attrs: { "md-label": "Ник", "md-sort-by": "name" } }, [e._v(e._s(s.name))]),
                                                                            l("md-table-cell", { attrs: { "md-label": "Дата смены", "md-sort-by": "name" } }, [e._v(e._s(new Date(s.date).toISOString().slice(0, 10)))]),
                                                                        ],
                                                                        1
                                                                    );
                                                                },
                                                            },
                                                        ],
                                                        null,
                                                        !1,
                                                        333848769
                                                    ),
                                                    model: {
                                                        value: e.selectedPlayer.nameHistory,
                                                        callback: function (t) {
                                                            e.$set(e.selectedPlayer, "nameHistory", t);
                                                        },
                                                        expression: "selectedPlayer.nameHistory",
                                                    },
                                                })
                                                : e._e(),
                                        ],
                                        1
                                    ),
                                    l("div", { staticClass: "md-layout-item" }, [
                                        l("div", { staticClass: "md-layout" }, [
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item" },
                                                [
                                                    l(
                                                        "md-field",
                                                        [
                                                            l("label", [e._v(e._s(this.selectedPlayer ? "Сменить ник" : "Введите ник"))]),
                                                            l("md-input", {
                                                                model: {
                                                                    value: e.nameEditModel,
                                                                    callback: function (t) {
                                                                        e.nameEditModel = t;
                                                                    },
                                                                    expression: "nameEditModel",
                                                                },
                                                            }),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ]),
                                        l("div", { staticClass: "md-layout" }, [
                                            l("div", { staticClass: "md-layout-item" }, [l("md-button", { staticClass: "md-raised first-button", on: { click: e.newPlayer } }, [e._v("Новый игрок")])], 1),
                                            l(
                                                "div",
                                                { staticClass: "md-layout-item-66 edit-buttons" },
                                                [
                                                    l("md-button", { staticClass: "md-raised md-primary", attrs: { disabled: "" == e.nameEditModel }, on: { click: e.savePlayer } }, [e._v("Сохранить")]),
                                                    l("md-button", { staticClass: "md-raised md-accent last-button", attrs: { disabled: !e.selectedPlayer }, on: { click: e.removePlayer } }, [e._v("Удалить")]),
                                                ],
                                                1
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ])
                        : e._e(),
                ]);
            },
            c = [],
            m =
                (l("6762"),
                    l("2fdb"),
                    l("ac6a"),
                    {
                        name: "Players",
                        props: { players: Array, games: Array, databaseSettings: Object },
                        data: function () {
                            return { mounted: null, selectedPlayer: null, nameEditModel: "", search: "", headers: [{ text: "Игрок", value: "name" }] };
                        },
                        mounted: function () {
                            this.mounted = !0;
                        },
                        methods: {
                            onSelect: function (e) {
                                (this.selectedPlayer = e), e && !e.nameHistory && (e.nameHistory = [{ name: e.name, date: Date.now() }]);
                            },
                            newPlayer: function () {
                                (this.selectedPlayer = null), (this.nameEditModel = "");
                            },
                            savePlayer: function () {
                                if (this.selectedPlayer)
                                    (this.selectedPlayer.name = this.nameEditModel),
                                        this.selectedPlayer.nameHistory.push({ nameChangeId: this.selectedPlayer.nameHistory.length + 1, name: this.nameEditModel, date: Date.now() }),
                                        (this.nameEditModel = "");
                                else {
                                    this.databaseSettings.maxPlayerId++;
                                    var e = { id: this.databaseSettings.maxPlayerId, name: this.nameEditModel, nameHistory: [{ nameChangeId: 1, name: this.nameEditModel, date: Date.now() }] };
                                    this.players.push(e), (this.nameEditModel = ""), (this.selectedPlayer = e);
                                }
                            },
                            removePlayer: function () {
                                var e = [],
                                    t = this.selectedPlayer.id;
                                if (
                                    (this.games.forEach(function (l) {
                                        l.players.includes(t) && e.push(l.id);
                                    }),
                                    e.length > 0)
                                ) {
                                    var l = "Невозможно удалить игрока так как он участвует в играх с номерами: " + e.join(", ");
                                    alert(l);
                                } else {
                                    var s = confirm("Вы уверены что хотите удалить игрока?");
                                    s && (this.$emit("removePlayer", t), this.newPlayer());
                                }
                            },
                        },
                    }),
            u = m,
            f = (l("6b39"), l("2877")),
            y = l("6544"),
            p = l.n(y),
            v = l("8fea"),
            h = l("0e8f"),
            b = l("a722"),
            g = l("8654"),
            x = Object(f["a"])(u, r, c, !1, null, "64d9fa5c", null),
            S = x.exports;
        p()(x, { VDataTable: v["a"], VFlex: h["a"], VLayout: b["a"], VTextField: g["a"] });
        var _ = function () {
                var e = this,
                    t = e.$createElement,
                    l = e._self._c || t;
                return l(
                    "div",
                    { staticClass: "d-flex" },
                    [
                        l("v-autocomplete", {
                            staticClass: "flex-grow-1 mr-1",
                            attrs: { value: e.value, items: e.players, "item-value": "id", "item-text": "name", filled: "", dense: "", label: e.label },
                            on: {
                                input: function (t) {
                                    return e.$emit("input", t);
                                },
                            },
                        }),
                        l("v-select", {
                            staticClass: "flex-shrink-0 mr-1 role",
                            attrs: { value: e.selectedRole, items: e.selectRoleOptions, filled: "", dense: "", label: "Роль" },
                            on: {
                                input: function (t) {
                                    return e.$emit("selectedRole", t);
                                },
                            },
                        }),
                        l("v-select", {
                            staticClass: "point",
                            attrs: { value: e.selectedPoint, items: e.selectPointOptions, filled: "", dense: "", label: "Доп балл" },
                            on: {
                                input: function (t) {
                                    return e.$emit("selectedPoint", t);
                                },
                            },
                        }),
                    ],
                    1
                );
            },
            R = [],
            C =
                (l("c5f6"),
                    {
                        name: "PlayerSelector",
                        props: { index: Number, value: [Object, Number], selectedRole: [Object, String], selectedPoint: [Object, String], players: Array },
                        components: {},
                        data: function () {
                            return {
                                label: "",
                                selectRoleOptions: [
                                    { value: "citizen", text: "М" },
                                    { value: "maf", text: "Маф" },
                                    { value: "don", text: "Дон" },
                                    { value: "sherif", text: "Шер" },
                                ],
                                selectPointOptions: [
                                    { value: "-0.1", text: "-0.1" },
{ value: "-0.2", text: "-0.2" },
{ value: "-0.3", text: "-0.3" },
{ value: "-0.4", text: "-0.4" },
{ value: "-0.5", text: "-0.5" },
{ value: "-0.6", text: "-0.6" },
{ value: "-0.7", text: "-0.7" },
{ value: "-0.8", text: "-0.8" },
{ value: "-0.9", text: "-0.9" },
{ value: "-1", text: "-1" },
{ value: "-1.1", text: "-1.1" },
{ value: "-1.2", text: "-1.2" },                                    
                                    { value: "0", text: "0" },
                                    { value: "0.1", text: "0.1" },
{ value: "0.2", text: "0.2" },
{ value: "0.3", text: "0.3" },
{ value: "0.4", text: "0.4" },
{ value: "0.5", text: "0.5" },
{ value: "0.6", text: "0.6" },
{ value: "0.7", text: "0.7" },
{ value: "0.8", text: "0.8" },
{ value: "0.9", text: "0.9" },
{ value: "1", text: "1" },
{ value: "1.1", text: "1.1" },
{ value: "1.2", text: "1.2" },
                                    
                                ],
                            };
                        },
                        created: function () {
                            this.label = "Игрок " + (this.index + 1);
                        },
                    }),
            P = C,
            k = (l("f340"), l("c6a6")),
            w = l("b974"),
            O = Object(f["a"])(P, _, R, !1, null, "0fcfcac5", null),
            G = O.exports;
        p()(O, { VAutocomplete: k["a"], VSelect: w["a"] });
        l("5363");
        var M = {
                name: "Games",
                components: { ModelListSelect: o["ModelListSelect"], Players: S, PlayerSelector: G },
                data: function () {
                    return {
                        renderComponent: !0,
                        databaseFile: { name: "" },
                        filename: null,
                        selectedDate: null,
                        selected: { id: null, date: null, players: Array(10).fill(null), don: null, maf1: null, maf2: null, sherif: null, cityWin: null },
                        selectPlayerOptions: [
                            { index: 0, label: "1" },
                            { index: 1, label: "2" },
                            { index: 2, label: "3" },
                            { index: 3, label: "4" },
                            { index: 4, label: "5" },
                            { index: 5, label: "6" },
                            { index: 6, label: "7" },
                            { index: 7, label: "8" },
                            { index: 8, label: "9" },
                            { index: 9, label: "10" },
                        ],
                        selectedRoles: Array(10).fill("citizen"),
                        selectedPoints: Array(10).fill("0"),
                        firstKilledGuessPointsOptions: [
                            { value: 0, label: "0" },
                            { value: 0.25, label: "0.25" },
                            { value: 0.5, label: "0.5" },
                        ],
                        winGameOptions: [
                            { value: !0, label: "Мир" },
                            { value: !1, label: "Мафия" },
                        ],
                        databaseSettings: { gamesMonth: "", maxPlayerId: 0, maxGameId: 0 },
                        players: [],
                        games: [],
                    };
                },
                created: function () {},
                methods: {
                    updateSelectedRole: function (e, t) {
                        (this.selectedRoles[t] = e), this.$forceUpdate();
                    },
                    updateSelectedPoint: function (e, t) {
                        (this.selectedPoints[t] = e), this.$forceUpdate();
                    },
                    forceRerender: function () {
                        var e = this;
                        (this.renderComponent = !1),
                            this.$nextTick(function () {
                                e.renderComponent = !0;
                            });
                    },
                    getEmptySelectedRoles: function () {
                        return Array(10).fill("citizen");
                    },
                    getEmptySelectedPoints: function () {
                        return Array(10).fill("0");
                    },
                    getSelectedRoles: function (e) {
                        var t = Array(10).fill("citizen");
                        return (t[e.don] = "don"), (t[e.sherif] = "sherif"), (t[e.maf1] = "maf"), (t[e.maf2] = "maf"), t;
                    },
                    getSelectedPoints: function (e) {
                        var t = Array(10).fill("0");
                        if(e.selectedPoints){
                            t.forEach(function(element, index){
                                t[index] = e.selectedPoints[index];
                            });
                        }
                        return t;
                    },
                    onSelect: function (e) {
                        (this.selected = this.copyGame(e)), (this.selectedRoles = this.getSelectedRoles(e)), (this.selectedPoints = this.getSelectedPoints(e));
                    },
                    newMonth: function () {
                        (this.games = []), (this.databaseSettings.gamesMonth = new Date().toISOString().substr(0, 7)), (this.databaseSettings.maxGameId = 0), this.setControlsToNewGame();
                    },
                    getDatabase: function () {
                        return { formatVersion: 1, settings: this.databaseSettings, games: this.games, players: this.players };
                    },
                    setDatabase: function (e) {
                        (this.games = e.games), (this.players = e.players), (this.databaseSettings = e.settings);
                    },
                    getPlayerName: function (e) {
                        return e
                            ? this.players.find(function (t) {
                                return t.id === e;
                            }).name
                            : "";
                    },
                    getEmptyGame: function () {
                        return { id: null, date: null, players: Array(10).fill(null), selectedPoints: Array(10).fill(0), don: null, maf1: null, maf2: null, sherif: null, firstKilled: null, firstKilledGuessPoints: null, cityWin: null };
                    },
                    copyGame: function (e) {
                        return {
                            id: e.id,
                            date: e.date,
                            players: e.players.slice(),
                            don: e.don,
                            maf1: e.maf1,
                            maf2: e.maf2,
                            sherif: e.sherif,
                            firstKilled: e.firstKilled,
                            firstKilledGuessPoints: e.firstKilledGuessPoints,
                            cityWin: e.cityWin,
                        };
                    },
                    isSelectedRolesValid: function () {
                        return (
                            1 ==
                            this.selectedRoles.filter(function (e) {
                                return "don" == e;
                            }).length &&
                            1 ==
                            this.selectedRoles.filter(function (e) {
                                return "sherif" == e;
                            }).length &&
                            2 ==
                            this.selectedRoles.filter(function (e) {
                                return "maf" == e;
                            }).length
                        );
                    },
                    saveGame: function () {
                        var e = this;
                        if (this.isSelectedRolesValid())
                            if (this.selected.id) {
                                var t = this.games.find(function (t) {
                                    return t.id === e.selected.id;
                                });
                                (t.date = this.selected.date),
                                    (t.players = this.selected.players),
                                    (t.selectedPoints = this.selectedPoints),
                                    (t.firstKilled = this.selected.firstKilled),
                                    (t.firstKilledGuessPoints = this.selected.firstKilledGuessPoints),
                                    (t.cityWin = this.selected.cityWin),
                                    (t.don = this.selectedRoles.indexOf("don")),
                                    (t.sherif = this.selectedRoles.indexOf("sherif")),
                                    (t.maf1 = this.selectedRoles.indexOf("maf")),
                                    (t.maf2 = this.selectedRoles.indexOf("maf", t.maf1 + 1)),
                                    (this.selected = this.copyGame(t)),
                                    (this.selectedRoles = this.getSelectedRoles(t)),
                                    (this.selectedPoints = this.getSelectedPoints(t));
                            } else
                                this.databaseSettings.maxGameId++,
                                    (this.selected.id = this.databaseSettings.maxGameId),
                                    (this.selected.don = this.selectedRoles.indexOf("don")),
                                    (this.selected.sherif = this.selectedRoles.indexOf("sherif")),
                                    (this.selected.maf1 = this.selectedRoles.indexOf("maf")),
                                    (this.selected.maf2 = this.selectedRoles.indexOf("maf", this.selected.maf1 + 1)),
                                    (this.selected.selectedPoints = this.selectedPoints),
                                    this.games.push(this.selected),
                                    (this.selected = this.getEmptyGame()),
                                    (this.selectedRoles = this.getEmptySelectedRoles()),
                                    (this.selectedPoints = this.getEmptySelectedPoints());
                        else alert("Должно быть два мафа, дон и шериф");
                    },
                    setControlsToNewGame: function () {
                        (this.selected = this.getEmptyGame()), (this.selectedRoles = this.getEmptySelectedRoles()), (this.selectedPoints = this.getEmptySelectedPoints());
                    },
                    reloadEdit: function () {
                        var e = this;
                        if (this.selected.id) {
                            var t = this.games.find(function (t) {
                                return t.id === e.selected.id;
                            });
                            (this.selected = this.copyGame(t)), (this.selectedRoles = this.getSelectedRoles(t)), (this.selectedPoints = this.getSelectedPoints(t));
                        } else (this.selected = this.getEmptyGame()), (this.selectedRoles = this.getEmptySelectedRoles()), (this.selectedPoints = this.getEmptySelectedPoints());
                    },
                    exportDatabase: function () {
                        var e = JSON.stringify(this.getDatabase()),
                            t = this.databaseSettings.gamesMonth + "-games.json";
                        this.downloadFile(e, t, "application/json");
                    },
                    downloadFile: function (e, t, l) {
                        var s = document.createElement("a"),
                            a = new Blob([e], { type: l });
                        (s.href = URL.createObjectURL(a)), (s.download = t), s.click();
                    },
                    test: function () {},
                    importDatabase: function (e) {
                        var t = new FileReader(),
                            l = this;
                        (t.onload = function () {
                            var e = JSON.parse(t.result);
                            l.setDatabase(e), this.setControlsToNewGame();
                        }),
                            t.readAsText(e[0]);
                    },
                    saveToStorage: function () {
                        window.localStorage.setItem("database", JSON.stringify(this.getDatabase()));
                    },
                    loadFromStorage: function () {
                        var e = JSON.parse(window.localStorage.getItem("database"));
                        this.setDatabase(e), this.setControlsToNewGame();
                    },
                    removePlayer: function (e) {
                        this.players = this.players.filter(function (t) {
                            return t.id != e;
                        });
                    },
                },
            },
            E = M,
            $ = (l("716f"), l("2e4b")),
            j = l("e449"),
            D = Object(f["a"])(E, n, d, !1, null, "4e7bf593", null),
            K = D.exports;
        p()(D, { VDatePicker: $["a"], VMenu: j["a"], VTextField: g["a"] });
        var N = { name: "app", components: { Games: K } },
            T = N,
            I = (l("034f"), l("7496")),
            V = Object(f["a"])(T, a, i, !1, null, null, null),
            A = V.exports;
        p()(V, { VApp: I["a"] });
        var F = l("43f9"),
            W = l.n(F),
            z = (l("51de"), l("e094"), l("f309"));
        s["default"].use(z["a"]);
        var H = new z["a"]({ icons: { iconfont: "mdi" } });
        s["default"].use(W.a),
            (s["default"].config.productionTip = !1),
            new s["default"]({
                vuetify: H,
                render: function (e) {
                    return e(A);
                },
            }).$mount("#app");
    },
    "6b39": function (e, t, l) {
        "use strict";
        var s = l("1e62"),
            a = l.n(s);
        a.a;
    },
    "716f": function (e, t, l) {
        "use strict";
        var s = l("3a36"),
            a = l.n(s);
        a.a;
    },
    b89b: function (e, t, l) {},
    f340: function (e, t, l) {
        "use strict";
        var s = l("b89b"),
            a = l.n(s);
        a.a;
    },
});
//# sourceMappingURL=app.bf291199.js.map
