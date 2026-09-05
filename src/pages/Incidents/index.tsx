import React, {useState} from "react";
export default (props) => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#EFEFEF] overflow-hidden">
				<div className="flex items-center self-stretch bg-[#CDDDFC] relative border border-solid border-[#5D88FF]">
					<div className="w-[341px] h-20 mr-[49px]">
					</div>
					<div className="flex flex-col shrink-0 items-start self-stretch bg-[#CDDDFC] absolute top-0 bottom-0 left-0 py-3 pl-[87px] pr-11 border border-solid border-[#5D88FF]">
						<div className="flex flex-col items-center relative">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/zdkomtc0_expires_30_days.png"} 
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
					<div className="flex flex-col shrink-0 items-start gap-[9px]">
						<span className="text-black text-[32px] ml-0.5 mr-[124px]" >
							Incidents
						</span>
						<span className="text-black text-sm" >
							View and manage all reported incidents
						</span>
					</div>
					<div className="flex-1 self-stretch">
					</div>
					<button className="flex shrink-0 items-center bg-white text-left py-2.5 px-4 mr-[45px] gap-[15px] rounded-[10px] border-0"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/maktjru5_expires_30_days.png"} 
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
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/kaoe5ls3_expires_30_days.png"} 
									className="w-[11px] h-[11px] object-fill"
								/>
								<span className="text-[#37C81A] text-[13px]" >
									Online
								</span>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/kpu9s1w5_expires_30_days.png"} 
							className="w-12 h-[47px] mr-2 object-fill"
						/>
					</div>
				</div>
				<div className="flex items-start self-stretch mr-[23px] gap-[57px]">
					<div className="bg-[#EDF3FF] w-[332px] pt-[30px] px-[15px]">
						<div className="flex items-center self-stretch bg-white mb-[30px] rounded-[10px]">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/lev2f1g2_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/dwj5bjtp_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/sg0k88hp_expires_30_days.png"} 
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
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/qwg3ior3_expires_30_days.png"} 
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
					<div className="flex-1 mt-[29px]">
						<div className="flex items-center self-stretch mb-[63px] mr-[31px]">
							<div className="flex flex-1 flex-col items-start bg-white py-6 mr-[60px] gap-[5px] rounded-[10px]">
								<div className="flex items-center ml-5 gap-[22px]">
									<button className="flex flex-col shrink-0 items-start bg-[#FFBFBFB8] text-left py-[15px] px-[11px] rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/725sjd9d_expires_30_days.png"} 
											className="w-[46px] h-[38px] object-fill"
										/>
									</button>
									<div className="flex flex-col shrink-0 items-start gap-[18px]">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Active Incidents
										</span>
										<span className="text-[#141313] text-2xl font-bold mr-[87px]" >
											6
										</span>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<span className="text-[#F44949] text-[11px] mr-[57px]" >
										+2 vs. last hour
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 mr-[58px] gap-1 rounded-[10px]">
								<div className="flex items-center ml-[25px] gap-[22px]">
									<button className="flex flex-col shrink-0 items-start bg-[#CDDDFCB8] text-left py-[13px] px-3 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/kahtfh4f_expires_30_days.png"} 
											className="w-11 h-[42px] object-fill"
										/>
									</button>
									<div className="flex flex-col shrink-0 items-start gap-[19px]">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Resolved
										</span>
										<span className="text-[#141313] text-2xl font-bold mr-7" >
											24
										</span>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<span className="text-[#37C81A] text-[11px] mr-[59px]" >
										+4 vs. last hour
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-6 mr-[57px] gap-[5px] rounded-[10px]">
								<div className="flex items-center ml-5 gap-[21px]">
									<button className="flex flex-col shrink-0 items-start bg-[#F7C9A3B8] text-left py-[15px] px-3.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/6rnci44y_expires_30_days.png"} 
											className="w-10 h-[38px] object-fill"
										/>
									</button>
									<div className="flex flex-col shrink-0 items-start gap-4">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Avg. Resolution Time
										</span>
										<span className="text-[#141313] text-2xl font-bold mr-11" >
											12 mins
										</span>
									</div>
								</div>
								<span className="text-[#37C81A] text-[11px] ml-[125px]" >
									-3 mins vs. last hour
								</span>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white py-[23px] gap-1 rounded-[10px]">
								<div className="flex items-center ml-[25px] gap-[21px]">
									<button className="flex flex-col shrink-0 items-start bg-[#E5D2FF] text-left py-[13px] px-3.5 rounded-[10px] border-0"
										onClick={()=>alert("Pressed!")}>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/fgu0b1a6_expires_30_days.png"} 
											className="w-[39px] h-[42px] object-fill"
										/>
									</button>
									<div className="flex flex-col shrink-0 items-start gap-4">
										<span className="text-[#100F0F] text-[13px] font-bold" >
											Incidents Today
										</span>
										<span className="text-[#141313] text-2xl font-bold mr-[70px]" >
											30
										</span>
									</div>
								</div>
								<div className="flex flex-col items-end self-stretch">
									<span className="text-[#37C81A] text-[11px] mr-[42px]" >
										10 vs. from yesterday
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center self-stretch mb-[34px] gap-4">
							<div className="flex flex-1 items-center bg-white rounded-[10px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/o3xwld80_expires_30_days.png"} 
									className="w-[29px] h-[26px] ml-[29px] mr-8 object-fill"
								/>
								<input
									placeholder="Search Incidents..."
									value={input5}
									onChange={(event)=>onChangeInput5(event.target.value)}
									className="flex-1 self-stretch text-[#686464] bg-transparent text-2xl py-[23px] mr-1 border-0"
								/>
							</div>
							<div className="flex flex-1 items-center">
								<button className="flex shrink-0 items-center bg-white text-left py-5 px-4 mr-4 gap-[50px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#141313] text-xl" >
										All Severities
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/diw4htp6_expires_30_days.png"} 
										className="w-[18px] h-3.5 object-fill"
									/>
								</button>
								<button className="flex shrink-0 items-center bg-white text-left py-[21px] px-4 mr-[17px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#141313] text-xl mr-[83px]" >
										All Status
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/4bllq0x2_expires_30_days.png"} 
										className="w-[18px] h-3.5 object-fill"
									/>
								</button>
								<button className="flex shrink-0 items-center bg-white text-left py-[21px] px-[17px] gap-[39px] rounded-[10px] border-0"
									onClick={()=>alert("Pressed!")}>
									<span className="text-[#141313] text-xl" >
										Last 24 Hours
									</span>
									<img
										src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/uaxyfgks_expires_30_days.png"} 
										className="w-[18px] h-3.5 object-fill"
									/>
								</button>
							</div>
						</div>
						<div className="self-stretch bg-white relative pt-[53px] px-[15px] ml-[7px] mr-9 rounded-[10px] border border-solid border-[#5D88FF]">
							<div className="self-stretch bg-[#EDF3FF] pt-[25px] mb-[33px] rounded-[10px]">
								<div className="flex items-center self-stretch mb-3.5 ml-8 mr-[43px]">
									<span className="text-[#100F0F] text-2xl mr-[172px]" >
										Severity
									</span>
									<span className="text-[#100F0F] text-2xl" >
										Title
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#100F0F] text-2xl mr-[162px]" >
										Incident ID
									</span>
									<span className="text-[#100F0F] text-2xl mr-[70px]" >
										Alerts
									</span>
									<span className="text-[#100F0F] text-2xl" >
										Updated at
									</span>
								</div>
								<div className="self-stretch bg-[#B090912E] h-[1px] mb-[9px]">
								</div>
								<div className="flex items-center self-stretch mb-7 ml-3.5 mr-[67px]">
									<div className="flex shrink-0 items-center bg-[#FFBFBFB8] py-4 px-[11px] mr-[105px] gap-3.5 rounded-[10px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/uusylwdv_expires_30_days.png"} 
											className="w-5 h-5 object-fill"
										/>
										<span className="text-[#C70A0A] text-xl" >
											Critical
										</span>
									</div>
									<span className="text-[#141313] text-xl mr-[107px]" >
										Database connection failure
									</span>
									<span className="text-[#141313] text-xl" >
										INC - 1024
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mr-[108px]" >
										240
									</span>
									<span className="text-[#141313] text-xl" >
										10:30 AM
									</span>
								</div>
								<div className="flex items-start self-stretch mb-[7px] ml-3.5 mr-16">
									<div className="flex shrink-0 items-center bg-[#F7C9A3B8] py-4 px-[11px] mr-[140px] gap-4 rounded-[10px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/cu94vajy_expires_30_days.png"} 
											className="w-[19px] h-5 object-fill"
										/>
										<span className="text-[#FF9D4C] text-xl" >
											High
										</span>
									</div>
									<span className="text-[#141313] text-xl mt-3" >
										High CPU usage
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-3" >
										INC - 1023
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-2.5 mr-[109px]" >
										120
									</span>
									<span className="text-[#141313] text-xl mt-3.5" >
										09:50 AM
									</span>
								</div>
								<div className="self-stretch bg-[#B090912E] h-0.5 mb-4">
								</div>
								<div className="flex items-start self-stretch mb-2 ml-3.5 mr-16">
									<div className="flex shrink-0 items-center bg-[#F8E9A3B8] py-[15px] px-[11px] mr-[104px] gap-3.5 rounded-[10px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/ov7wioej_expires_30_days.png"} 
											className="w-[19px] h-5 object-fill"
										/>
										<span className="text-[#A38605] text-xl" >
											Medium
										</span>
									</div>
									<span className="text-[#141313] text-xl mt-3" >
										API timeout
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-3.5 mr-[189px]" >
										INC - 1022
									</span>
									<span className="text-[#141313] text-xl mt-[11px] mr-[118px]" >
										85
									</span>
									<span className="text-[#141313] text-xl mt-3" >
										09:32 AM
									</span>
								</div>
								<div className="self-stretch bg-[#B090912E] h-[1px] mb-4">
								</div>
								<div className="flex items-start self-stretch mb-2 ml-3.5 mr-16">
									<div className="flex shrink-0 items-center bg-[#CDDDFCB8] py-4 px-[11px] gap-[15px] rounded-[10px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/m8tvnlgj_expires_30_days.png"} 
											className="w-5 h-5 object-fill"
										/>
										<span className="text-[#5D88FF] text-xl" >
											Low
										</span>
									</div>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-[17px]" >
										Memory Usage High
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-[15px]" >
										INC - 1021
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-[9px] mr-[119px]" >
										55
									</span>
									<span className="text-[#141313] text-xl mt-[11px]" >
										08:45 AM
									</span>
								</div>
								<div className="self-stretch bg-[#B090912E] h-0.5 mb-3">
								</div>
								<div className="flex items-start self-stretch mb-[11px] ml-3.5 mr-[65px]">
									<div className="flex shrink-0 items-center bg-[#F7C9A3B8] py-4 px-[11px] mr-[139px] gap-[11px] rounded-[10px]">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yonId6NjXU/baraaoq3_expires_30_days.png"} 
											className="w-[19px] h-5 object-fill"
										/>
										<span className="text-[#FF9D4C] text-xl" >
											High
										</span>
									</div>
									<span className="text-[#141313] text-xl mt-[13px]" >
										Authentication failure
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-5" >
										INC - 1020
									</span>
									<div className="flex-1 self-stretch">
									</div>
									<span className="text-[#141313] text-xl mt-[15px] mr-[119px]" >
										22
									</span>
									<span className="text-[#141313] text-xl mt-3" >
										08:20 AM
									</span>
								</div>
							</div>
							<div className="self-stretch bg-[#B090912E] h-[1px] absolute top-48 right-[18px] left-[18px]">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}