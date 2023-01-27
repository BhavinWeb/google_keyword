<template>
	<div class="w-full h-full mt-4 px-4 overflow-hidden">
		<div class="flex flex-col">
			<!-- eslint-disable  -->
			<div class="overflow-hidden border p-2 w-full rounded-lg flex flex-col gap-y-2">
				<table id="keywordTable" class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50 text-center">
					<tr>
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Keywords
						</th>
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Template
						</th>
						<th class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase" scope="col">
							Options
						</th>
					</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
					<tr v-for="(keywords, index) in keywordList" :key="index">
						<td
							class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
						>
							{{ keywords.name }}
						</td>
						<td
							class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
						>
							{{ keywords.template }}
						</td>
						<td
							class="px-6 py-4 text-sm font-medium text-right flex gap-4 whitespace-nowrap"
						>
							<div
								class="text-green-500 cursor-pointer hover:text-green-700"
							>
								Edit
							</div>
							<a
								class="text-red-500 hover:text-red-700"
								href="#"
							>
								Delete
							</a>
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
	name: "TemplateKeyword",
	props: {
		keywordList: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		$("#keywordTable").DataTable();
	},
	methods: {
		viewTemplate(id) {
			this.$emit('viewTemplate', {templateId: id});
		}
	}
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