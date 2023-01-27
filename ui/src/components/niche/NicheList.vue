<template>
	<div>
		<div class="flex flex-col">

			<div class="overflow-hidden border p-2 w-full rounded-lg flex flex-col gap-y-2">
				<table id="nicheTable" class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50 text-center">
					<tr>
						<!--						<th scope="col" class="py-3 pl-4 text-xs font-bold text-left text-gray-500 uppercase flex gap-1 items-center justify-center">-->
						<!--							<div class="flex items-center h-5">-->
						<!--								<input id="checkbox-all" type="checkbox" class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>-->
						<!--								<label for="checkbox" class="sr-only">-->
						<!--									Checkbox-->
						<!--								</label>-->
						<!--							</div>-->
						<!--							Action-->
						<!--						</th>-->
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Niche
						</th>
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Templates
						</th>
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Options
						</th>
					</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
					<tr v-for="(niche, index) in nicheList" :key="index">
						<!--						<td class="py-3 pl-4 text-xs text-gray-800 flex gap-1 items-center justify-center">-->
						<!--							<div class="flex items-center h-5">-->
						<!--								<input type="checkbox" class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>-->
						<!--								<label for="checkbox" class="sr-only">-->
						<!--									Checkbox-->
						<!--								</label>-->
						<!--							</div>-->
						<!--						</td>-->
						<td
							class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
						>
							{{ niche.name }}
						</td>
						<td
							class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
						>
							{{ niche.templatesCount }}
						</td>
						<td
							class="px-6 py-4 text-sm font-medium text-right flex gap-4 whitespace-nowrap"
						>
<!--							<a-->
<!--								class="text-green-500 hover:text-green-700"-->
<!--								href="#"-->
<!--							>-->
<!--								Edit-->
<!--							</a>-->
							<div class="flex gap-2 items-center text-red-700 hover:text-red-900 font-semibold cursor-pointer">
								<svg class="w-6 h-6 " fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
								</svg>
								Delete
							</div>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net/js/jquery.dataTables.min";
import $ from "jquery";

export default {
	name: "NicheList",
	props: {
		nicheList: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		$("#nicheTable").DataTable();
	},
}
</script>

<style lang="css">
@import "datatables.net-dt/css/jquery.dataTables.min.css";


.dataTables_wrapper select,
.dataTables_wrapper .dataTables_filter input {
	color: #4a5568;
	/*text-gray-700*/
	padding-left: 1rem;
	/*pl-4*/
	padding-right: 1rem;
	/*pl-4*/
	padding-top: .5rem;
	/*pl-2*/
	padding-bottom: .5rem;
	/*pl-2*/
	line-height: 1.25;
	/*leading-tight*/
	border-width: 2px;
	/*border-2*/
	border-radius: .25rem;
	border-color: #edf2f7;
	/*border-gray-200*/
	background-color: #edf2f7;
	/*bg-gray-200*/
}

/*Row Hover*/
table.dataTable.hover tbody tr:hover,
table.dataTable.display tbody tr:hover {
	background-color: #ebf4ff;
	/*bg-indigo-100*/
}

/*Pagination Buttons*/
.dataTables_wrapper .dataTables_paginate .paginate_button {
	font-weight: 700;
	/*font-bold*/
	border-radius: .25rem;
	/*rounded*/
	border: 1px solid transparent;
	/*border border-transparent*/
}

/*Pagination Buttons - Current selected */
.dataTables_wrapper .dataTables_paginate .paginate_button.current {
	color: #fff !important;
	/*text-white*/
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
	/*shadow*/
	font-weight: 700;
	/*font-bold*/
	border-radius: .25rem;
	/*rounded*/
	background: #667eea !important;
	/*bg-indigo-500*/
	border: 1px solid transparent;
	/*border border-transparent*/
}

/*Pagination Buttons - Hover */
.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
	color: #fff !important;
	/*text-white*/
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
	/*shadow*/
	font-weight: 700;
	/*font-bold*/
	border-radius: .25rem;
	/*rounded*/
	background: #667eea !important;
	/*bg-indigo-500*/
	border: 1px solid transparent;
	/*border border-transparent*/
}

/*Add padding to bottom border */
table.dataTable.no-footer {
	border-bottom: 1px solid #e2e8f0;
	/*border-b-1 border-gray-300*/
	margin-top: 0.75em;
	margin-bottom: 0.75em;
}

/*Change colour of responsive icon*/
table.dataTable.dtr-inline.collapsed > tbody > tr > td:first-child:before,
table.dataTable.dtr-inline.collapsed > tbody > tr > th:first-child:before {
	background-color: #667eea !important;
	/*bg-indigo-500*/
}
</style>