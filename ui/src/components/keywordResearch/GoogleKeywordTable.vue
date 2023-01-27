<template>
	<div class="flex flex-col gap-4 my-4  w-full h-full">
		<!-- eslint-disable  -->
		<div class="flex items-center justify-between gap-8 w-full">
			<div class="flex items-center gap-4 flex-row">
				<div class="text-sm font-semibold">
					Result From:
				</div>
				<button class="h-10 px-7 bg-blue-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
						@click="$emit('displayResult', {'display': 'gk', 'status': 1})">
					Google Keyword Planner
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
			<table id="keywordTable" class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50 text-center">
				<tr>
					<!--					flex gap-1 items-center justify-center -->
					<th class="py-3 pl-4 text-xs font-bold text-left text-gray-500 uppercase " scope="col">
						<!--						<div class="flex items-center h-8">-->
						<!--							<input-->
						<!--								id="checkbox-all"-->
						<!--								type="checkbox"-->
						<!--								class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"-->
						<!--							/>-->
						<!--							<label for="checkbox" class="sr-only">-->
						<!--								Checkbox-->
						<!--							</label>-->
						<!--						</div>-->
						<span></span>
					</th>
					<th>Group</th>
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
						VOL
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						CPC
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						CMP
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						Top of page Bid <br>
						<span class=" capitalize">(low range)</span>
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						Top of page Bid <br>
						<span class=" capitalize">(high range)</span>
					</th>
					<th
						class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
						scope="col"
					>
						Competition Index
					</th>
					<!--					<th
											scope="col"
											class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
										>
											Ranking
										</th>-->
					<!--					<th
											scope="col"
											class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase"
										>
											Delete
										</th>-->
				</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
				<!--				v-bind:class="searchedKeys.includes((keywordData.keyword).toLowerCase()) ? 'bg-red-100 ' : 'bg-gray-100 '"-->
				<tr v-for="(keywordData, index) in keywordSet"
					:key="index"
					v-bind:class="{'bg-gray-50 ' : searchedKeys.includes((keywordData.keyword).toLowerCase())}">
					<td class="py-3 pl-4 text-xs  flex gap-1 items-center justify-center">
						<!--						v-if="!searchedKeys.includes((keywordData.keyword).toLowerCase())"-->
						<div class="flex items-center h-5">
							<input v-model="keywordData.selected"
								   class="text-blue-600 border-gray-200 rounded focus:ring-blue-500" type="checkbox"
								   v-bind:checked="keywordData.selected && selected.includes(keywordData.keyword)"
								   @click="checkSelected(keywordData.keyword, keywordData.selected)"
							/>
							<label class="sr-only" for="checkbox">
								Checkbox
							</label>
						</div>
					</td>
					<td>{{
							searchedKeys.includes((keywordData.keyword).toLowerCase()) ? 'Keywords that you provided' : 'Keyword ideas'
						}}
					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.keyword }}
					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.searchVolume ?? '-' }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.avgCPC > 0 ? ('US$' + keywordData.avgCPC) : '-' }}
					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.competition ?? '-' }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.topBidLow ? keywordData.topBidLow : '-' }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.topBidLow ? keywordData.topBidHigh : '-' }}

					</td>
					<td
						class="px-6 py-4 text-sm  whitespace-nowrap"
					>
						{{ keywordData.competitionIndex ?? '-' }}

					</td>
					<!--					<td
											class="px-6 py-4 text-sm  whitespace-nowrap"
										> &lt;!&ndash; ((BH - BV)/2)*( 3 * CPC + AV )/CI &ndash;&gt;
											{{ (formula.replaceAll('AV', parseInt(keywordData.keyword_idea_metrics.avg_monthly_searches)).replaceAll('CPC', parseFloat(keywordData.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000).toFixed(2)).replaceAll('BH', parseFloat(keywordData.keyword_idea_metrics.high_top_of_page_bid_micros)).replaceAll('BL', parseFloat(keywordData.keyword_idea_metrics.low_top_of_page_bid_micros)).replaceAll('CI', parseInt(keywordData.keyword_idea_metrics.competition_index))) }}
					&lt;!&ndash;, 'CPC', 'CI', 'BH', 'BL' => , (keywordData.keyword_idea_metrics.low_top_of_page_bid_micros / 1000000).toFixed(2), keywordData.keyword_idea_metrics.competition_index, keywordData.keyword_idea_metrics.high_top_of_page_bid_micros, keywordData.keyword_idea_metrics.low_top_of_page_bid_micros &ndash;&gt;
										</td>-->
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
	name: "GoogleKeywordTable",
	data() {
		return {
			keywords: '',
			displayAddOption: false,
			templateSelected: 0,
			groupColumn: 1,
		}
	},
	props: {
		keywordSet: {
			type: Array,
			default: () => []
		},
		searchedKeys: {
			type: Array,
			default: () => []
		},
		selected: {
			type: Array,
			default: () => []
		},
		templateList: {
			type: Array,
			default: () => []
		},
		ahLoading: {
			type: Boolean,
			default: false,
		}
	},
	mounted() {
		$("#keywordTable").DataTable({
			columnDefs: [{visible: false, targets: 1}],
			// order: [[1, 'asc']],
			displayLength: 10,
			drawCallback: function (settings) {
				var api = this.api();
				var rows = api.rows({page: 'current'}).nodes();
				var last = null;

				api
					.column(1, {page: 'current'})
					.data()
					.each(function (group, i) {
						if (last !== group) {
							$(rows)
								.eq(i)
								.before('<tr class="group bg-gray-200 font-semibold text-primary text-sm" ><td colspan="8">' + group + '</td></tr>');

							last = group;
						}
					});
			},
		});
	},
	methods: {
		checkSelected(id, value) {
			console.log(id)
			if (this.$props.selected.includes(id) && value) {
				this.$props.selected = this.$props.selected.filter(obj => obj !== id).map(obj => obj)
			} else {
				this.$props.selected.push(id)
			}
			console.log(this.$props.selected, this.$props.selected.length)

			this.displayAddOption = this.$props.selected.length
		},
		addToTemplate() {
			let selected = this.$props.selected
			if (this.templateSelected != 0)
				this.$emit('addToTemplate', {
					keywords: selected,
					template: this.templateSelected,
					type: 'gk'
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

table.dataTable.hover tbody tr.bg-gray-50,
table.dataTable tbody tr.bg-gray-50,
table.dataTable.display tbody tr.bg-gray-50 {
	background-color: #f9fafb !important;
}

table.dataTable.hover tbody tr.bg-gray-200,
table.dataTable tbody tr.bg-gray-200,
table.dataTable.display tbody tr.bg-gray-200 {
	background-color: #e5e7eb !important;
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