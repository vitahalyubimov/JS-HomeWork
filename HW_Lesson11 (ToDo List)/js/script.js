Date.prototype.setNodes = function(date, time, textNodes){
    let nodes = {};
    nodes.date = date;
    nodes.time = time;
    nodes.textNodes = textNodes;
    return nodes;
};
$(".btn").click(function(){
    let date = $("[name=date]").val();
    let time = $("[name=time]").val();
    let textNodes = $("#text-nodes").val();
    
    let nodes = new Date().setNodes(date, time, textNodes);
	if (nodes.date !== "" && nodes.time !== "")
	{
		let numNodes = localStorage.length + 1;
		let keyNodes = "Nodes " + numNodes;
		localStorage.setItem(keyNodes, JSON.stringify(nodes));
	}
	location.reload();
});     
$("#get").click(function(){
    let res = localStorage.getItem("Nodes 1");
    let nodes = JSON.parse(res);
});
$("#clear-nodes").click(function(){
    localStorage.clear();
	location.reload();
});
function showNodes(){
    let nodes;
    let countNodes = 1;
    
    while(nodes = localStorage.getItem("Nodes " + countNodes))
    {
        let obj = JSON.parse(localStorage.getItem("Nodes " + countNodes));
        let p = "<p>";
        p += "(" + obj.date + ")" + " (" + obj.time + ")";
        if (obj.textNodes.length > 0)
            p += "Примечание: " + obj.textNodes;
        p += "</p>";
        $("#show-nodes").add(p).appendTo($("#show-nodes"));
        countNodes++;
    }
}
(function(){
    showNodes();
	checkTimeNodes();
})()
function checkTimeNodes()
{
	if (localStorage.length)
	{
//		let nowDate = new Date();
//		for (let i = 1; i <= localStorage.length; i++)
//		{
//			let date = nowDate.getFullYear() + "-" + nowDate.getMonth() + "-"
//            + nowDate.getDate();
//            let d = nowDate.getMonth();
//            
//			let nodes = JSON.parse(localStorage.getItem("Nodes " + i));
//			console.log(nodes);
//		}
	}
}