<template>
	<div class="flex flex-col gap-4 my-4  w-full h-full">
		<!-- eslint-disable  -->
		<div class="flex items-center justify-between gap-8 w-full">
			<div class="flex items-center gap-4 flex-row">
				<div class="text-sm font-semibold">
					Result From:
				</div>
				<button class="h-10 px-7 bg-blue-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
						@click="$emit('displayResult', {'display': 'ah', 'status': 2})">
					Ahref
				</button>
			</div>
			<div v-show="displayAddOption" class="flex gap-4 items-center">
				<div class="text-sm font-semibold">With Selected:</div>
				<select id="templateSelector" v-model="templateSelected"
						class="form-select form-select-sm appearance-none block w-full px-4 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
					<option disabled selected value="0">Select Template</option>
					<option v-for="(template, index) in templateList" :key="index"
							:value="template">{{ template.name }}
					</option>
				</select>
				<button class="h-10 px-7 bg-blue-600 w-full text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						@click="addToTemplate">
					Add to template
				</button>
			</div>
		</div>
		<div class="overflow-hidden border p-2 w-full rounded-lg flex flex-col gap-y-2">
			<table id="keywordAhTable" class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50 text-center">
				<tr>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						Keyword
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						KD
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						VOL
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						GV
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						TP
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						CPS
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						CPC
					</th>
				</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
				<tr v-for="(keywordAh, index) in keywordSetAh"
					:key="index"
					v-bind:class="searchedKeys.includes(keywordAh.keyword) ? 'bg-red-100 ' : 'bg-gray-100 '">
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.keyword }}
					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.KD }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.Volume }}
					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.GV }}

					</td>

					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.TP }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.CPS }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordAh.CPC }}

					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net/js/jquery.dataTables.min";
import $ from "jquery";

export default {
	name: "AhKeywordTable",
	data() {
		return {
			keywords: '',
			displayAddOption: false,
			templateSelected: 0,
		}
	},
	props: {
		keywordSetAh: {
			type: Array,
			default: () => []
		},
		searchedKeys: {
			type: Array,
			default: () => []
		},
		selectedAh: {
			type: Array,
			default: () => []
		},
		templateList: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		$("#keywordAhTable").DataTable();
	},
	methods: {
		checkSelected(id, value) {
			console.log(id)
			if (this.$props.selectedAh.includes(id) && value) {
				this.$props.selectedAh = this.$props.selectedAh.filter(obj => obj !== id).map(obj => obj)
			} else {
				this.$props.selectedAh.push(id)
			}
			console.log(this.$props.selectedAh, this.$props.selectedAh.length)

			this.displayAddOption = this.$props.selectedAh.length
		},
		addToTemplate() {
			let selectedAh = this.$props.selectedAh
			if (this.templateSelected != 0)
				this.$emit('addToTemplate', {
					keywords: selectedAh,
					template: this.templateSelected,
					type: 'ah'
				});
			else
				alert('Please Select Template First');
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
//background-color: #ebf4ff;
	/*bg-indigo-100*/
}

table.dataTable.hover tbody tr.bg-gray-100,
table.dataTable tbody tr.bg-gray-100,
table.dataTable.display tbody tr.bg-gray-100 {
	background-color: #f3f4f6 !important;
}

table.dataTable.hover tbody tr.bg-red-100,
table.dataTable tbody tr.bg-red-100,
table.dataTable.display tbody tr.bg-red-100 {
	background-color: #fee2e2 !important;
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