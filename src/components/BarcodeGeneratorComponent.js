function BarcodeGenerator() {
	return (
		<div className="container mt-3">
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="singleItem">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Single/Bulk Label
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="singleItem"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<a
								role="button"
								className="btn"
								data-bs-toggle="modal"
								data-bs-target="#singleItemModal"
							>
								TAP HERE FOR HELP
							</a>
							<form>
								<div className="mb-3 col-8">
									<input
										className="form-control"
										id="singleItemInfo"
										aria-describedby="singleItemHelp"
										type="number"
										placeholder="Item Information"
									/>
									<div
										id="singleItemHelp"
										className="form-text"
									>
										Enter the 16-digit number for a single
										barcode.
									</div>
								</div>
								<div className="mb-3">
									<button className="btn btn-usf-green text-white">
										Generate Single
									</button>
									<button className="btn btn-usf-orange text-white">
										Clear
									</button>
								</div>
								<div className="mb-3">
									<a
										target="blank"
										href="https://www.tec-it.com/en/start/Default.aspx"
									>
										Barcodes by Tec-it
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="multipleItem">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Multiple Labels
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="multipleItem"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<a
								role="button"
								className="btn"
								data-bs-toggle="modal"
								data-bs-target="#multipleItemModal"
							>
								TAP HERE FOR HELP
							</a>
							<form>
								<div className="row align-items-start mb-3">
									<div className="col-8">
										<input
											className="form-control"
											id="multipleItemInfo"
											type="number"
											placeholder="Item Information"
										/>
									</div>
									<div className="col-4">
										<input
											className="form-control"
											id="multipleQuantity"
											type="number"
											placeholder="Quantity"
										/>
									</div>
								</div>

								<div className="mb-3">
									<button className="btn btn-usf-green text-white">
										Generate Multiple
									</button>
									<button className="btn btn-usf-orange text-white">
										Clear
									</button>
								</div>
								<div className="mb-3">
									<a
										target="blank"
										href="https://www.tec-it.com/en/start/Default.aspx"
									>
										Barcodes by Tec-it
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Pallet Label
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse show"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<a
								role="button"
								className="btn"
								data-bs-toggle="modal"
								data-bs-target="#palletLabelModal"
							>
								TAP HERE FOR HELP
							</a>
							<p>
								What is the pallet? <em>Example: F02</em>
							</p>
							<p>
								For multiple pallets, separate values with a
								comma.
								<em>Example: D10, R09, F08</em>
							</p>
							<form>
								<div className="row align-items-start mb-3">
									<label
										className="col-form-label"
										htmlFor="division"
									>
										Division
									</label>
									<div className="col-4 mb-3">
										<select
											className="form-select"
											id="division"
											name="division"
										>
											<option defaultValue="2230">
												5Y
											</option>
										</select>
									</div>
									<div className="col-8">
										<input
											className="form-control"
											id="multipleItemInfo"
											type="number"
											placeholder="Pallet(s)"
										/>
									</div>
									<div className="col-6">
										<input
											type="number"
											className="form-control"
											id="stop"
											placeholder="Stop"
										/>
									</div>
									<div className="col-6">
										<input
											type="text"
											className="form-control"
											id="route"
											placeholder="Route"
										/>
									</div>
									<div className="col col-md-6 mt-3">
										<label
											className="col-form-label"
											htmlFor="date"
										>
											Date
										</label>
										<input
											className="form-control"
											type="date"
											id="date"
											name="date"
											placeholder="Date"
										/>
									</div>
								</div>

								<div className="mb-3">
									<button className="btn btn-usf-green text-white">
										Generate Pallet
									</button>
									<button className="btn btn-usf-orange text-white">
										Clear
									</button>
								</div>
								<div className="mb-3">
									<a
										target="blank"
										href="https://www.tec-it.com/en/start/Default.aspx"
									>
										Barcodes by Tec-it
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div
					className="modal fade"
					id="singleItemModal"
					tabIndex="-1"
					aria-labelledby="modalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="modalLabel">
									Item Label
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<p>
									Select the item on the POD Screen. It should
									be highlighted in blue. Tap the 'More'
									button on the bottom right.
								</p>
								<img src="" alt="item code" />
								<hr />
								<p>
									The item information is located in the
									second box on the top of the next screen.
									Enter that number into the application then
									tap Generate Single
								</p>
								<img src="" alt="" />
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-usf-gray text-white"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="modal fade"
					id="multipleItemModal"
					tabIndex="-1"
					aria-labelledby="modalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="modalLabel">
									Multiple Item Label
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<p>
									Select the item on the POD Screen. It should
									be highlighted in blue. Tap the 'More'
									button on the bottom right.
								</p>
								<img src="" alt="" />
								<hr />
								<p>
									The item information is located in the
									second box on the top of the next screen.
									This number should end in '01'. Enter that
									number into the application, then enter how
									many labels of that item you need to create
									in the Quantity box. Lastly, tap Generate
									Multiple.
								</p>
								<img src="" alt="" />
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-usf-gray text-white"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="modal fade"
					id="palletLabelModal"
					tabIndex="-1"
					aria-labelledby="modalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="modalLabel">
									Pallet Label
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<p>
									The pallet number and stop appears on your
									POD screen.
								</p>
								<img src="" alt="" />
								<hr />
								<p>
									Route number is your 4-digit route number.
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-usf-gray text-white"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default BarcodeGenerator;
