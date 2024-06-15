import React from "react";
import ReactDOM from "react-dom/client";
import { getProductssortandfilter } from "./functions/product";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  RowData,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";

import { useSearchParams } from "react-router-dom";

function DebouncedInput({
  value: initialValue,
  onChange,
  delay = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(value);
      //after delay done pass text value to passed onchange me
      // taki vo further  setGlobalFilter(String(value)) kar paye
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

const MyTable = () => {
  const columnHelper = createColumnHelper();

  const mycol = [
    columnHelper.accessor("brand", {
      header: "Brand",
    }),

    columnHelper.accessor("title", {
      header: "Title",
    }),
    columnHelper.accessor("price", {
      header: "Price",
    }),
    columnHelper.accessor("category.name", {
      header: "Category",
      //enableMultiSorting: false,
      disableSortBy: true,
      // isSortable: false,
    }),
  ];

  const [mydata, setmydata] = useState({});
  const [prodcount, setmyprodcount] = useState(0);

  const data = useLoaderData();
  useEffect(() => {
    console.log(data.data[0]);
  });

  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0, // page index matlab = page number
    pageSize: 8, // page size matlab = limit
  });

  let [searchParams, setSearchParams] = useSearchParams();

  const mytable = useReactTable({
    data: mydata,
    state: {
      sorting,
      pagination,
    },
    pageCount: Math.round(prodcount / mydata.length),
    sortDescFirst: false,
    enableMultiSort: true,
    manualSorting: true,
    manualPagination: true,
    columns: mycol,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
  });

  const loadAllProductssortandfilter = (
    sort,
    order,
    page,
    catlist,
    color,
    brand,
    shipping,
    starNumbers,
    mypricechanged,
    myprice,
    mytext
  ) => {
    getProductssortandfilter(
      sort,
      order,
      page,
      catlist,
      color,
      brand,
      shipping,
      starNumbers,
      mypricechanged,
      myprice,
      mytext
    ).then((res) => {
      console.log("bbbbbbbbbx" + page, res.data.products);
      console.log("bbbbbbbbbz" + page, res.data.total);

      setmydata(res.data.products);
      console.log("xxxprodcount", res.data.total);

      setmyprodcount(res.data.total);
      // setProducts(res.data.products);
      // const cv = Math.round(productsCount / 8) * 10;
      // console.log("bbbbbbbbbcv" + page, cv);
      // const cv2 = Math.round(res.data.total / 8) * 10;
      // console.log("bbbbbbbbbcv2" + page, cv2);
      // setLoading(false);
    });
  };

  // {id: 'name', desc: true}

  useEffect(() => {
    console.log("xxsort", sorting);

    if (sorting.length !== 0) {
      const [sortField, sortyByasc] = Object.values(sorting[0]);
      console.log(sortField);
      console.log(sortyByasc);
      loadAllProductssortandfilter(
        sortField,
        sortyByasc ? "asc" : "desc",
        1,
        [],
        "",
        "",
        "",
        [],
        false,
        [0, 0],
        ""
      );
    } else {
      loadAllProductssortandfilter(
        "title",
        "asc",
        1,
        [],
        "",
        "",
        "",
        [],
        false,
        [0, 0],
        ""
      );
    }
  }, [sorting]);

  //    console.log("xxsort", sorting);

  // {id: 'title', desc: true}   single sort
  //onClick={header.column.getToggleSortingHandler()}

  // onClick={() =>  header.column.toggleSorting(null, true) }
  // {id: 'title', desc: true}   multiple sort
  // {id: 'price', desc: false}

  useEffect(() => {
    console.log("xxglobalfilter", globalFilter);

    if (globalFilter.length > 0) {
      loadAllProductssortandfilter(
        "title",
        "asc",
        1,
        [],
        "",
        "",
        "",
        [],
        false,
        [0, 0],
        globalFilter.toString()
      );
    } else {
      loadAllProductssortandfilter(
        "title",
        "asc",
        1,
        [],
        "",
        "",
        "",
        [],
        false,
        [0, 0],
        ""
      );
    }
  }, [globalFilter]);
  //    console.log("xxxglobalfilter", globalFilter);
  //globalfilter="entered text"
  // onChange={(value) => setGlobalFilter(String(value))}

  useEffect(() => {
    console.log("xxcolfilter", columnFilters);

    if (columnFilters.length > 0) {
      const [groupbyField, groupbyvalue] = Object.values(columnFilters[0]);
      console.log(groupbyField);
      console.log(groupbyvalue);
      loadAllProductssortandfilter(
        "title",
        "asc",
        1,
        [],
        "",
        "",
        "",
        [],
        false,
        [0, 0],
        groupbyvalue
      );
    }
  }, [columnFilters]);

  //console.log("xxcolfilter", columnFilters);
  //{id: 'title', value: 'r'}
  //{id: 'brand', value: 'r'}

  useEffect(() => {
    const { pageIndex, pageSize } = pagination;
    console.log("xxxx1", pageIndex);
    console.log("xxxx1", pageSize);
    // setSearchParams({
    //   page: table.getState().pagination.pageIndex + 1,
    //   limit: table.getState().pagination.pageSize,
    // });

    loadAllProductssortandfilter(
      "title",
      "asc",
      pageIndex + 1,
      [],
      "",
      "",
      "",
      [],
      false,
      [0, 0],
      ""
    );

    //can also pass limit(page size ki value) here in api
    //but baclend me set he 8 hi so vhi

    console.log("xxxx", pagination);
  }, [pagination]);

  //console.log("xxxx", pagination);
  //{pageIndex: 2, pageSize: 8}

  return (
    <div>
      <div>
        <input
          type="text"
          value={globalFilter ?? ""}
          //onChange={(value) => setGlobalFilter(String(value))}
          // onChange={(e) => {
          //   setGlobalFilter(e.target.value);
          // }}
          placeholder="simple global search.."
        />
      </div>
      <div>
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="debounced global search.."
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "grey",
            justifyContent: "center",
            height: "35px",
            alignItems: "center",
          }}
        >
          <button
            className="border rounded p-1"
            onClick={() => mytable.setPageIndex(0)}
            disabled={!mytable.getCanPreviousPage()}
          >
            {"<<"}
          </button>

          <button
            className="border rounded p-1"
            onClick={() => mytable.previousPage()}
            disabled={!mytable.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <div>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <div>Page</div>
              <strong>
                {mytable.getState().pagination.pageIndex + 1} of{" "}
                {mytable.getPageCount()}
              </strong>
            </span>
          </div>

          <button
            className="border rounded p-1"
            onClick={() => mytable.nextPage()}
            disabled={!mytable.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => mytable.setPageIndex(mytable.getPageCount() - 1)}
            disabled={!mytable.getCanNextPage()}
          >
            {">>"}
          </button>
          <select
            value={mytable.getState().pagination.pageSize}
            onChange={(e) => {
              mytable.setPageSize(Number(e.target.value));
            }}
          >
            {[8, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table>
        <thead>
          {mytable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          //onClick={header.column.getToggleSortingHandler()}
                          onClick={() =>
                            header.column.toggleSorting(null, true)
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted()] ?? null}
                        </div>

                        <div>
                          <input
                            type="text"
                            value={header.column.getFilterValue()}
                            //onChange={(value) => setGlobalFilter(String(value))}
                            onChange={(e) => {
                              //setGlobalFilter(e.target.value);
                              header.column.setFilterValue(e.target.value);
                            }}
                            placeholder="simple global search.."
                          />
                        </div>
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {mytable.getRowModel().rows.length == 0 && <h1>loading</h1>}
          {console.log("sss", mytable.getRowModel().rows)}
          {mytable.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  // console.log("dxxx", cell);
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
