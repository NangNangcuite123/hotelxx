(function () {
    let arr = JSON.parse(localStorage.getItem("arr"));
    let tbody = document.querySelector("tbody");
    let tr = "";
    let availableText = "Available";
    let floorText = "Floor";
    let roomCount = Number(arr[1]);
    let floorCount = Number(arr[0]);
    let bighotel = {};

    Array.from({ length: floorCount }).forEach((index0 , i) => {
      tr += `<tr><td> ${floorText} ${i + 1}</td>`;
      Array.from({ length: roomCount }).forEach((index1 ,j) => {
        let hotelid = `${i + 1}-${j + 1}`;
        bighotel[hotelid] = null; //
        tr += `<td id ="${hotelid}">${availableText}</td>`;
      });
      tr += `</tr>`;
    });
    tbody.innerHTML = tr;
    document.querySelector("#checkin").onclick = function () {
      document.querySelector("#frm").classList.remove("d-none");
      document.querySelector("#frm1").classList.add("d-none");
    };
    document.querySelector("#checkout").onclick = function () {
      document.querySelector("#frm1").classList.remove("d-none");
      document.querySelector("#frm").classList.add("d-none");
    };

    let floorhotel = document.querySelector("#floorHotel");
    let roomhotel = document.querySelector("#roomHotel");
    let guesthotel = document.querySelector("#guestHotel");
    document.querySelector("#frm").onsubmit = function (event) {
      event.preventDefault();
      let frm = document.querySelector("#frm");
      let hotelid = `${floorhotel.value}-${roomhotel.value}`;

      if (
        roomhotel.value == "" ||
        floorhotel.value == "" ||
        guesthotel.value == ""
      ) {
        alert("Please enter all informations");
        
      } else if (bighotel[hotelid] === undefined) {
        alert(
          `Room ${roomhotel.value} on Floor ${floorhotel.value} does not exist.`
        );
      } else if (bighotel[hotelid] === null) {
        // Check-in guest
        bighotel[hotelid] = guesthotel.value;
        document.getElementById(hotelid).innerHTML = guesthotel.value;
        
        alert(
          `Checked-in : ${guesthotel.value} to Floor ${floorhotel.value} Room ${roomhotel.value}`
        );
        document.querySelector("#frm").classList.add("d-none");
      } else {
        alert(
          `Room ${roomhotel.value} in this Floor ${floorhotel.value} is already Taken`
          
        );
        
      }
      document.querySelector("#frm").reset();
      
    };
    let outfloor = document.querySelector("#outfloor");
    let outroom = document.querySelector("#outroom");

    document.querySelector("#frm1").onsubmit = function (event) {
      event.preventDefault();
      let hotelid = `${outfloor.value}-${outroom.value}`;
      if (bighotel[hotelid] === undefined) {
        alert(`Room ${outroom.value} on Floor ${outfloor.value} does not exist.`);
      } else if (bighotel[hotelid] === null) {
        alert(`Room ${outroom.value} on Floor ${outfloor.value} not yet checked-in.`);
      } else {
        bighotel[hotelid] = null;
        document.getElementById(hotelid).innerHTML = availableText;
        alert(`Checked-out from Floor ${outfloor.value} Room ${outroom.value}`);
        document.querySelector("#frm1").classList.add("d-none");
      }
      document.querySelector("#frm1").reset();
    }
  })();