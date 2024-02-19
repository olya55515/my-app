import axios from "axios";
import { Pizza } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get(
            `https://659ef14f6ee7621d94dbc67c.mockapi.io/items?page=${currentPage}&limit=6&${category}&${search}&sortBy=${sortBy}&order=${order}`
        );
        return data;
    }
);