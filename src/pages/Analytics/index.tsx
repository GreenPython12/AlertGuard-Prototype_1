import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#EFEFEF] overflow-hidden">
				<div className="flex items-center self-stretch bg-[#CDDDFC] relative border border-solid border-[#5D88FF]">
					<div className="w-[341px] h-20 mr-[49px]">
					</div>
					<div className="flex flex-col shrink-0 items-start self-stretch bg-[#CDDDFC] absolute top-0 bottom-0 left-0 py-3 pl-[87px] pr-11 border border-solid border-[#5D88FF]">
						<div className="flex flex-col items-center relative">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/snat8ujt_expires_30_days.png"} 
								className="w-[107px] h-[71px] absolute bottom-[-6px] left-[-87px] object-fill"
							/>
							<div className="flex flex-col items-start gap-3">
								<span className="text-black text-[40px] font-bold" >
									AlertGuard
								</span>
								<span className="text-[#05001F] text-sm mr-[31px]" >
									Intelligent Alert Noise Filter
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col shrink-0 items-start gap-[3px]">
						<span className="text-black text-[32px] mr-[124px]" >
							Analytics
						</span>
						<span className="text-black text-sm" >
							Insights and trends from your alert data
						</span>
					</div>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mr-[45px] gap-[15px] rounded-[10px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/fgt9uky9_expires_30_days.png"} 
							className="w-[19px] h-[18px] object-fill"
						/>
						<span className="text-[#05001F] text-[13px]" >
							August 20, 2026 | 9:30 AM
						</span>
					</button>
					<div className="flex justify-between items-center bg-white w-[198px] py-[1px] rounded-[10px]">
						<div className="flex flex-col items-start w-[66px] ml-[19px] gap-[7px]">
							<span className="text-[#141313] text-[13px]" >
								Team User
							</span>
							<div className="flex items-center self-stretch gap-1">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/hci3n6md_expires_30_days.png"} 
									className="w-[11px] h-[11px] object-fill"
								/>
								<span className="text-[#37C81A] text-[13px]" >
									Online
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ae2xxe00_expires_30_days.png"} 
							className="w-12 h-[47px] mr-2 object-fill"
						/>
					</div>
				</div>
				<div className="flex items-start self-stretch mr-[55px] gap-[22px]">
					<div className="bg-[#EDF3FF] w-[332px] pt-[30px] px-[15px]">
						<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/qh650vuq_expires_30_days.png"} 
								className="w-[25px] h-6 ml-[21px] mr-[15px] rounded-[10px] object-fill"
							/>
							<input
								placeholder="Dashboard"
								value={input1}
								onChange={(event)=>onChangeInput1(event.target.value)}
								className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[18px] mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/dibipwfc_expires_30_days.png"} 
								className="w-[31px] h-[29px] ml-[21px] mr-[13px] rounded-[10px] object-fill"
							/>
							<input
								placeholder="Incidents"
								value={input2}
								onChange={(event)=>onChangeInput2(event.target.value)}
								className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[18px] mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/bw54tgqm_expires_30_days.png"} 
								className="w-7 h-[27px] ml-[26px] mr-[9px] rounded-[10px] object-fill"
							/>
							<input
								placeholder="Analytics"
								value={input3}
								onChange={(event)=>onChangeInput3(event.target.value)}
								className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-4 mr-1 border-0"
							/>
						</div>
						<div className="flex items-center self-stretch bg-white mb-[701px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/6096b5ns_expires_30_days.png"} 
								className="w-7 h-7 ml-[22px] mr-3.5 rounded-[10px] object-fill"
							/>
							<input
								placeholder="Settings"
								value={input4}
								onChange={(event)=>onChangeInput4(event.target.value)}
								className="flex-1 self-stretch text-[#5D88FF] bg-transparent text-2xl py-[15px] mr-1 border-0"
							/>
						</div>
					</div>
					<div className="flex-1 mt-[35px]">
						<div className="flex items-center self-stretch mb-[17px]">
							<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[15px] gap-1 rounded-[10px]">
								<div className="flex items-start self-stretch mx-[21px]">
									<button className="flex flex-col shrink-0 items-start bg-[#CDDDFC] text-left py-[15px] px-[18px] mr-[21px] rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/7yfpcvuf_expires_30_days.png"} 
											className="w-8 h-[38px] object-fill"
										/>
									</button>
									<div className="flex flex-col shrink-0 items-start mt-[7px] gap-[19px]">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Total Alerts
										</span>
										<span className="text-[#141313] text-2xl font-bold mr-[26px]" >
											500
										</span>
									</div>
									<div className="flex-1 self-stretch">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/1m4ovpgy_expires_30_days.png"} 
										className="w-[53px] h-7 mt-[31px] object-fill"
									/>
								</div>
								<span className="text-[#37C81A] text-[11px]" >
									12% from last hour
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 mr-3.5 gap-1 rounded-[10px]">
								<div className="flex items-start self-stretch ml-[25px] mr-[13px]">
									<button className="flex flex-col shrink-0 items-start bg-[#CAEBC3] text-left py-[13px] px-3 mr-[21px] rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/x903wmwr_expires_30_days.png"} 
											className="w-11 h-[42px] object-fill"
										/>
									</button>
									<div className="flex flex-1 flex-col items-start mt-[7px] mr-6 gap-4">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Alerts Suppressed
										</span>
										<span className="text-[#141313] text-2xl font-bold" >
											492
										</span>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/c1ascw4a_expires_30_days.png"} 
										className="w-[53px] h-7 mt-[31px] object-fill"
									/>
								</div>
								<span className="text-[#37C81A] text-[11px] ml-[130px]" >
									14% from last hour
								</span>
							</div>
							<div className="flex flex-1 flex-col items-center bg-white py-6 mr-[15px] gap-1 rounded-[10px]">
								<div className="flex items-start self-stretch mx-[21px]">
									<button className="flex flex-col shrink-0 items-start bg-[#F6DECA] text-left py-[15px] px-2.5 mr-[21px] rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/43oiuvu4_expires_30_days.png"} 
											className="w-[46px] h-[38px] object-fill"
										/>
									</button>
									<div className="flex flex-1 flex-col items-start mt-1.5 mr-[39px] gap-[18px]">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Active Incidents
										</span>
										<span className="text-[#141313] text-2xl font-bold" >
											8
										</span>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/zkwhl03d_expires_30_days.png"} 
										className="w-[53px] h-7 mt-[31px] object-fill"
									/>
								</div>
								<span className="text-[#F44949] text-[11px]" >
									20% from last hour
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 gap-1 rounded-[10px]">
								<div className="flex items-start self-stretch ml-[25px] mr-[13px]">
									<button className="flex flex-col shrink-0 items-start bg-[#E5D2FF] text-left py-[13px] px-3.5 mr-[21px] rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/0kwqkmo1_expires_30_days.png"} 
											className="w-[39px] h-[42px] object-fill"
										/>
									</button>
									<div className="flex flex-1 flex-col items-start mt-1.5 mr-[37px] gap-[18px]">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Noise Reduction
										</span>
										<span className="text-[#141313] text-2xl font-bold" >
											98.4
										</span>
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/7qbchpui_expires_30_days.png"} 
										className="w-[53px] h-7 mt-[31px] object-fill"
									/>
								</div>
								<span className="text-[#37C81A] text-[11px] ml-[130px]" >
									2.1% from last hour
								</span>
							</div>
						</div>
						<div className="flex items-start self-stretch mb-[33px] mx-[3px]">
							<div className="flex flex-1 flex-col items-start bg-white pt-2 mt-[17px] mr-[74px] rounded-[10px]">
								<div className="flex items-start self-stretch mb-[11px] mx-[25px]">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/3ww0ltw6_expires_30_days.png"} 
										className="w-8 h-[25px] mt-3.5 mr-3 object-fill"
									/>
									<span className="text-[#141313] text-base font-bold mt-[17px]" >
										Alert Activity
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<div className="flex shrink-0 items-center bg-[#CDDDFCB8] py-[3px] px-[7px] rounded-[10px]">
										<button className="flex flex-col shrink-0 items-start bg-[#5D88FF] text-left py-3 px-[17px] mr-[13px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-xs" >
												Last 1 Hour
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-[15px] mr-2.5 rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#141313] text-xs" >
												Last 6 Hours
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-3 px-[11px] rounded-[10px] border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-[#141313] text-xs" >
												Last 24 Hours
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch mb-[26px]">
									<div className="flex items-center mr-11">
										<div className="bg-[#C70A0A] w-[27px] h-2 mr-[9px] rounded-[10px]">
										</div>
										<span className="text-[#141313] text-[10px] mr-[67px]" >
											Incoming Alerts
										</span>
										<div className="bg-[#2CA014] w-[27px] h-2 mr-[9px] rounded-[10px]">
										</div>
										<span className="text-[#141313] text-[10px]" >
											Processed Alerts
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-2.5 mx-[22px] gap-[18px]">
									<span className="text-[#141313] text-[10px]" >
										500
									</span>
									<div className="flex-1 bg-[#D5CECE] h-[1px]">
									</div>
								</div>
								<div className="flex items-start self-stretch relative mb-[21px] mx-[22px]">
									<div className="flex flex-col shrink-0 items-start mt-[18px] mr-[18px] gap-[27px]">
										<span className="text-[#141313] text-[10px]" >
											400
										</span>
										<span className="text-[#141313] text-[10px]" >
											300
										</span>
										<span className="text-[#141313] text-[10px]" >
											200
										</span>
										<span className="text-[#141313] text-[10px]" >
											100
										</span>
										<span className="text-[#141313] text-[10px] mr-3" >
											0
										</span>
									</div>
									<div className="flex-1">
										<div className="flex flex-col items-start self-stretch relative mx-[1px]">
											<div className="self-stretch bg-[#D3CFCF] h-[1px] absolute top-[23px] right-0 left-0">
											</div>
											<div className="self-stretch bg-[#D3CFCF] h-[1px] absolute top-[58px] right-0 left-0">
											</div>
											<div className="self-stretch bg-[#D5CECE] h-[1px] absolute bottom-[68px] right-0 left-0">
											</div>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/02k0w9o8_expires_30_days.png"} 
												className="w-[638px] h-[163px] object-fill"
											/>
										</div>
										<div className="self-stretch bg-[#D5CECE] h-[1px]">
										</div>
									</div>
									<div className="bg-[#D3CFCF] w-[635px] h-[1px] absolute bottom-[34px] right-[3px]">
									</div>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/v8yn8r89_expires_30_days.png"} 
										className="w-[634px] h-[71px] absolute bottom-[1px] right-1 object-fill"
									/>
								</div>
								<div className="flex items-center mb-9 ml-[43px]">
									<span className="text-[#141313] text-[10px] mr-[66px]" >
										10:00
									</span>
									<span className="text-[#141313] text-[10px] mr-[77px]" >
										10:10
									</span>
									<span className="text-[#141313] text-[10px] mr-[76px]" >
										10:20
									</span>
									<span className="text-[#141313] text-[10px] mr-[75px]" >
										10:30
									</span>
									<span className="text-[#141313] text-[10px] mr-[74px]" >
										10:40
									</span>
									<span className="text-[#141313] text-[10px] mr-[79px]" >
										10:50
									</span>
									<span className="text-[#141313] text-[10px]" >
										11:00
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start bg-white w-[522px] pt-[34px] pl-[35px] pr-[15px] rounded-[10px]">
								<span className="text-[#100F0F] text-2xl font-bold mb-8" >
									Top Alert Categories
								</span>
								<div className="flex items-start self-stretch mb-[58px]">
									<div className="flex flex-col shrink-0 items-center bg-cover bg-center py-[83px] px-[68px] mr-8 gap-[9px]">
										<span className="text-[#100F0F] text-4xl font-bold" >
											500
										</span>
										<span className="text-[#100F0F] text-sm font-bold" >
											Total Alerts
										</span>
									</div>
									<div className="flex flex-col shrink-0 items-center mt-[31px] mr-2 gap-[30px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/nfmwv78o_expires_30_days.png"} 
											className="w-[11px] h-2.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/avegtuuk_expires_30_days.png"} 
											className="w-[11px] h-2.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/l2lmubgc_expires_30_days.png"} 
											className="w-[11px] h-2.5 object-fill"
										/>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/e62nurvo_expires_30_days.png"} 
											className="w-[11px] h-2.5 object-fill"
										/>
									</div>
									<div className="flex flex-col shrink-0 items-start mt-[31px]">
										<span className="text-[#141313] text-xs font-bold mb-[31px]" >
											Database Connection    48%(240)
										</span>
										<span className="text-[#141313] text-xs font-bold mb-[27px]" >
											CPU Usage High              24%(120)
										</span>
										<span className="text-[#141313] text-xs font-bold mb-[29px] mr-[11px]" >
											API Timeout                      17%(85)
										</span>
										<span className="text-[#141313] text-xs font-bold mr-[15px]" >
											Authentication                11%(55)
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center self-stretch mx-[9px] gap-10">
							<div className="flex-1 bg-white py-[31px] rounded-[10px] border border-solid border-[#5D88FF]">
								<div className="flex flex-col items-end self-stretch mb-[39px]">
									<div className="flex items-center mr-[29px]">
										<span className="text-[#171616] text-[15px] font-bold mr-[343px]" >
											Top Sources
										</span>
										<span className="text-[#5D88FF] text-[15px] font-bold" >
											View all
										</span>
									</div>
								</div>
								<div className="flex items-center self-stretch mb-3.5 ml-[31px] mr-[18px]">
									<span className="text-[#141313] text-base mr-[39px]" >
										Web Application
									</span>
									<div className="flex-1 bg-[#8A38F5] h-[27px] mr-[11px] rounded-[10px]">
									</div>
									<span className="text-[#141313] text-base" >
										520
									</span>
								</div>
								<div className="flex items-center self-stretch mb-3.5 mx-[31px]">
									<span className="text-[#141313] text-base" >
										API Gateway
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<div className="shrink-0 items-start bg-[#CDDDFCB8] pl-[1px] pr-[136px] mr-3 rounded-[10px]">
										<div className="bg-[#8A38F5] w-[200px] h-[27px] rounded-[10px]">
										</div>
									</div>
									<span className="text-[#141313] text-base" >
										312
									</span>
								</div>
								<div className="flex items-center self-stretch mb-3.5 ml-8 mr-[21px]">
									<span className="text-[#141313] text-base" >
										Database
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<div className="shrink-0 items-start bg-[#CDDDFCB8] pl-[1px] pr-[169px] mr-3 rounded-[10px]">
										<div className="bg-[#8A38F5] w-[167px] h-[27px] rounded-[10px]">
										</div>
									</div>
									<span className="text-[#141313] text-base" >
										210
									</span>
								</div>
								<div className="flex items-center self-stretch mb-3.5 ml-[31px] mr-5">
									<span className="text-[#141313] text-base" >
										Authentication
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<div className="shrink-0 items-start bg-[#CDDDFCB8] pl-0.5 pr-[203px] mr-[13px] rounded-[10px]">
										<div className="bg-[#8A38F5] w-[132px] h-[27px] rounded-[10px]">
										</div>
									</div>
									<span className="text-[#141313] text-base" >
										126
									</span>
								</div>
								<div className="flex items-center self-stretch mx-8">
									<span className="text-[#141313] text-base" >
										Other
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<div className="shrink-0 items-start bg-[#CDDDFCB8] pl-[3px] pr-[283px] mr-3.5 rounded-[10px]">
										<div className="bg-[#8A38F5] w-[51px] h-[27px] rounded-[10px]">
										</div>
									</div>
									<span className="text-[#141313] text-base" >
										80
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col bg-white py-[22px] gap-4 rounded-[10px] border border-solid border-[#5D88FF]">
								<div className="flex items-center self-stretch mx-8">
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/3tqzp030_expires_30_days.png"} 
										className="w-5 h-[27px] mr-4 object-fill"
									/>
									<span className="text-[#171616] text-[15px] font-bold" >
										Recent Alerts
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#5D88FF] text-[13px] font-bold" >
										View all
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch bg-[#EDF3FF] pt-2.5 mx-[17px] rounded-[10px]">
									<div className="flex items-center mb-[13px] ml-4">
										<span className="text-[#100F0F] text-xs mr-[93px]" >
											Severity
										</span>
										<span className="text-[#100F0F] text-xs mr-[165px]" >
											Alert Message
										</span>
										<span className="text-[#100F0F] text-xs mr-[97px]" >
											Service
										</span>
										<span className="text-[#100F0F] text-xs" >
											Time
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
									</div>
									<div className="flex items-center mb-[7px] ml-2">
										<div className="flex shrink-0 items-center bg-[#FFBFBFB8] py-2 px-[7px] mr-[54px] gap-[7px] rounded-[10px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/6qgf3app_expires_30_days.png"} 
												className="w-[9px] h-[9px] object-fill"
											/>
											<span className="text-[#C70A0A] text-xs" >
												Critical
											</span>
										</div>
										<span className="text-[#141313] text-xs mr-[77px]" >
											Database connection failed
										</span>
										<span className="text-[#141313] text-xs mr-[59px]" >
											Payment Service
										</span>
										<span className="text-[#141313] text-xs" >
											10:32 AM
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
									</div>
									<div className="flex items-center mb-[7px] ml-2">
										<div className="flex shrink-0 items-center bg-[#F7C9A3B8] p-[7px] mr-[71px] gap-[7px] rounded-[10px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/0antnxsc_expires_30_days.png"} 
												className="w-[9px] h-[9px] object-fill"
											/>
											<span className="text-[#FF9D4C] text-xs" >
												High
											</span>
										</div>
										<span className="text-[#141313] text-xs mr-[141px]" >
											CPU usage high
										</span>
										<span className="text-[#141313] text-xs mr-[72px]" >
											Server Cluster
										</span>
										<span className="text-[#141313] text-xs" >
											10:31 AM
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
									</div>
									<div className="flex items-center mb-[7px] ml-2">
										<div className="flex shrink-0 items-center bg-[#F8E9A3B8] p-[7px] mr-[53px] gap-1.5 rounded-[10px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/6dniryhd_expires_30_days.png"} 
												className="w-[9px] h-[9px] object-fill"
											/>
											<span className="text-[#A38605] text-xs" >
												Medium
											</span>
										</div>
										<span className="text-[#141313] text-xs mr-[118px]" >
											API request timeout
										</span>
										<span className="text-[#141313] text-xs mr-[82px]" >
											API Gateway
										</span>
										<span className="text-[#141313] text-xs" >
											10:30 AM
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px] mb-[5px]">
									</div>
									<div className="flex items-center mb-1.5 ml-2">
										<div className="flex shrink-0 items-center bg-[#CDDDFCB8] p-[7px] mr-20 gap-[5px] rounded-[10px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/i92vg157_expires_30_days.png"} 
												className="w-[9px] h-[9px] object-fill"
											/>
											<span className="text-[#5D88FF] text-xs" >
												Low
											</span>
										</div>
										<span className="text-[#141313] text-xs mr-[109px]" >
											Authentication failure
										</span>
										<span className="text-[#141313] text-xs mr-[82px]" >
											Auth Service
										</span>
										<span className="text-[#141313] text-xs" >
											10:29 AM
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px] mb-1.5">
									</div>
									<div className="flex items-center mb-1.5 ml-2">
										<div className="flex shrink-0 items-center bg-[#F7C9A3B8] p-[7px] mr-[71px] gap-1.5 rounded-[10px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/7ikh37qy_expires_30_days.png"} 
												className="w-[9px] h-[9px] object-fill"
											/>
											<span className="text-[#FF9D4C] text-xs" >
												High
											</span>
										</div>
										<span className="text-[#141313] text-xs mr-[119px]" >
											Memory usage high
										</span>
										<span className="text-[#141313] text-xs mr-[82px]" >
											User Service
										</span>
										<span className="text-[#141313] text-xs" >
											10:28 AM
										</span>
									</div>
									<div className="self-stretch bg-[#B090912E] h-[1px]">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}