var app = angular.module("myApp", ['angularUtils.directives.dirPagination']);

app.controller("myController", function ($scope) {
    $scope.hocSinh = [
        { hoTen: "Nam", tuoi: new Date(2004, 01, 01), lop: "--Lop 10A1" },
        { hoTen: "Bede", tuoi: new Date(2006, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "Hoho", tuoi: new Date(2003, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "Kaka", tuoi: new Date(2002, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "Benben", tuoi: new Date(2004, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "Lunu", tuoi: new Date(2006, 01, 01), lop: "--Lop 12A1" },
        { hoTen: "Lpaa", tuoi: new Date(2001, 01, 01), lop: "--Lop 12A2" },
        { hoTen: "gag", tuoi: new Date(1993, 01, 01), lop: "--Lop 10A1" },
        { hoTen: "gfds", tuoi: new Date(1992, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "htr", tuoi: new Date(1995, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "vcbcn", tuoi: new Date(1992, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "Buiuyt", tuoi: new Date(1999, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "tur", tuoi: new Date(1994, 01, 01), lop: "--Lop 12A1" },
        { hoTen: "Ltrter", tuoi: new Date(1998, 01, 01), lop: "--Lop 12A2" },
        { hoTen: "wrter", tuoi: new Date(2002, 01, 01), lop: "--Lop 10A1" },
        { hoTen: "ertwet", tuoi: new Date(2004, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "Htretgfd", tuoi: new Date(2004, 01, 01), lop: "--Lop 10A2" },
        { hoTen: "qqenm", tuoi: new Date(2002, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "wwan", tuoi: new Date(2004, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "tkju", tuoi: new Date(2005, 01, 01), lop: "--Lop 12A1" },
        { hoTen: "xbx", tuoi: new Date(2001, 01, 01), lop: "--Lop 12A2" },
        { hoTen: "hahf", tuoi: new Date(2002, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "hyu", tuoi: new Date(2004, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "tdsg", tuoi: new Date(2005, 01, 01), lop: "--Lop 12A1" },
        { hoTen: "sreet", tuoi: new Date(2001, 01, 01), lop: "--Lop 12A2" },
        { hoTen: "543ds", tuoi: new Date(2002, 01, 01), lop: "--Lop 11A1" },
        { hoTen: "rwqer", tuoi: new Date(2004, 01, 01), lop: "--Lop 11A2" },
        { hoTen: "t4545", tuoi: new Date(2005, 01, 01), lop: "--Lop 12A1" }
    ];

    $scope.lopThuoc = [
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
        { tenLop: "Lop 10A1", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 10A2", thuoc: "Lop 10" },
        { tenLop: "Lop 11A1", thuoc: "Lop 11" },
        { tenLop: "Lop 11A2", thuoc: "Lop 11" },
        { tenLop: "Lop 12A1", thuoc: "Lop 12" },
        { tenLop: "Lop 12A2", thuoc: "Lop 12" },
    ];

    $scope.danhSachTimKiemLop = [
        "Lop ",
        "Lop 10",
        "--Lop 10A1",
        "--Lop 10A2",
        "Lop 11",
        "--Lop 11A1",
        "--Lop 11A2",
        "Lop 12",
        "--Lop 12A1",
        "--Lop 12A2"
    ];

    $scope.danhSachChonThemSua = [
        "--Lop 10A1", "--Lop 10A2",
        "--Lop 11A1", "--Lop 11A2",
        "--Lop 12A1", "--Lop 12A2"
    ];

    $scope.khoi = [
        "Lop 10",
        "Lop 11",
        "Lop 12"
    ];

    $scope.tabHocSinh = true;
    $scope.tabThemHocSinh = true;
    $scope.tabSuaHocSinh = true;

    $scope.tabLop = true;
    $scope.tabThemLop = true;
    $scope.tabSuaLop = true;

    $scope.chuyenTabHocSinh = function () {

        //Show tab HocSinh
        $scope.tabHocSinh = true;
        $scope.tabThemHocSinh = true;
        $scope.tabSuaHocSinh = true;

        //Hide tab Lop
        $scope.tabLop = true;
        $scope.tabThemLop = true;
        $scope.tabSuaLop = true;
    };

    $scope.chuyenTabLop = function () {

        //Hide tab HocSinh
        $scope.tabHocSinh = false;
        $scope.tabThemHocSinh = true;
        $scope.tabSuaHocSinh = true;

        //Show tab Lop
        $scope.tabLop = false;
        $scope.tabThemLop = true;
        $scope.tabSuaLop = true;
    };

    //tab Hoc Sinh ******************************************************************************* tab Hoc Sinh\\
    $scope.suaHocSinh = function (hs) {
        $scope.tabSuaHocSinh = false;
        $scope.tabHocSinh = false;
        $scope.hs = hs;
    };

    $scope.luuSuaHocSinh = function () {
        $scope.tabSuaHocSinh = true;
        $scope.tabHocSinh = true;
    };

    $scope.themHocSinh = function () {
        $scope.tabThemHocSinh = false;
        $scope.tabHocSinh = false;
    };

    $scope.luuThemHocSinh = function (hoTen, tuoi, lop) {
        if (
            (hoTen != null || hoTen != undefined) &&
            (tuoi != null || tuoi != undefined) &&
            (lop != null || lop != undefined)
        ) {
            var c = $scope.tinhTuoi(tuoi);
            var x = { hoTen: hoTen, tuoi: tuoi, lop: lop };
            $scope.hocSinh.push(x);
            $scope.tabThemHocSinh = true;
            $scope.tabHocSinh = true;

            $scope.hoTen = null;
            $scope.tuoi = null;
            $scope.lop = null;
            $scope.hocSinhMacDinh.push(x);
        }
    };

    $scope.xoaHocSinh = function (hs) {
        var index = $scope.hocSinh.indexOf(hs);
        $scope.hocSinh.splice(index, 1);
    };

    $scope.tinhTuoi = function (ngaySinh) {
        return (new Date().getFullYear()) - (new Date(ngaySinh).getFullYear());
    }

    //TODO tao mang hocSinhMacDinh giong y het lop hocSinh
    $scope.hocSinhMacDinh = angular.copy($scope.hocSinh);
    $scope.duLieuVaoNutTimKiem = {};

    $scope.timKiem = function () {
        var tamThoiTen = $scope.duLieuVaoNutTimKiem.hoTen;
        var tamThoiTuoi = $scope.duLieuVaoNutTimKiem.tuoi;
        var tamThoiLop = $scope.duLieuVaoNutTimKiem.lop;

        $scope.hocSinh = angular.copy(_.filter($scope.hocSinhMacDinh,
            function (x) {
                return ((tamThoiTuoi === null || tamThoiTuoi === undefined) || (tamThoiTuoi !== null && tamThoiTuoi !== undefined && $scope.tinhTuoi(x.tuoi) == tamThoiTuoi)) &&
                    ((tamThoiLop === null || tamThoiLop === undefined) || (tamThoiLop !== null && tamThoiLop !== undefined && x.lop.includes(tamThoiLop))) &&
                    ((tamThoiTen === null || tamThoiTen === undefined) || (tamThoiTen !== null && tamThoiTen !== undefined && x.hoTen.includes(tamThoiTen)));
            }));
    };

     //tab Lop *************************************************************************************** tab Lop\\
    $scope.xoaLop = function (lop) {
        var index = $scope.lopThuoc.indexOf(lop);
        $scope.lopThuoc.splice(index, 1);
    };

    $scope.themLop = function () {
        $scope.tabLop = true;
        $scope.tabThemLop = false;
    }

    $scope.luuThemLop = function (tenLop, thuoc) {
        if (
            (tenLop != null || tenLop != undefined) &&
            (thuoc != null || thuoc != undefined)
        ) {
            $scope.lopThuoc.push({ tenLop: tenLop, thuoc: thuoc });
            $scope.danhSachTimKiemLop.push($scope.tenLop);
            $scope.danhSachChonThemSua.push($scope.tenLop);
            $scope.tabThemLop = true;
            $scope.tabLop = false;
            $scope.tenLop = null;
            $scope.thuoc = null;
        }
    };

    $scope.suaLop = function (lop) {
        $scope.tabLop = true;
        $scope.tabSuaLop = false;
        $scope.lop = lop;
    }

    $scope.luuSuaLop = function () {
        $scope.tabSuaLop = true;
        $scope.tabLop = false;
    };
});
