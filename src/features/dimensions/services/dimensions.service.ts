import { createApi } from '@reduxjs/toolkit/query/react';
import { baseApi } from '../../../api';
import { IQuery } from '../../../shared/models';
import { IDimension, IDimensionItem } from '../models';

export const dimensionsApi = createApi({
  reducerPath: 'dimensionsApi',
  baseQuery: baseApi,
  endpoints: (builder) => ({
    createDimension: builder.mutation<any, { valume_type_name: string; sub_category_id: string }>({
      query: ({ valume_type_name, sub_category_id }) => ({
        url: '/valume-type/create',
        method: 'POST',
        body: { valume_type_name, sub_category_id },
      }),
    }),
    deleteDimension: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: '/valume-type/delete',
        method: 'POST',
        body: { id },
      }),
    }),
    updateDimension: builder.mutation<any, IDimension>({
      query: (body) => ({
        url: '/valume-type/update',
        method: 'POST',
        body,
      }),
    }),
    getValumeTypeList: builder.query<{ total: number; data: IDimension[] }, IQuery>({
      query: (body) => ({
        url: '/valume-type/list',
        method: 'POST',
        body: { ...body, limit: 1000000 },
      }),
    }),
    getValumeTypeItem: builder.mutation<IDimensionItem, { id: string }>({
      query: (body) => ({
        url: '/valume-type/get-one',
        method: 'POST',
        body,
      }),
    }),
    getValumeTypeExcel: builder.mutation<Blob, IQuery>({
      query: (body) => ({
        url: '/valume-type/excel',
        method: 'POST',
        body,
        responseHandler: async (response) =>
          window.location.assign(window.URL.createObjectURL(await response.blob())),
      }),
    }),
  }),
});

export const {
  useCreateDimensionMutation,
  useGetValumeTypeListQuery,
  useGetValumeTypeItemMutation,
  useGetValumeTypeExcelMutation,
  useDeleteDimensionMutation,
  useUpdateDimensionMutation,
} = dimensionsApi;
