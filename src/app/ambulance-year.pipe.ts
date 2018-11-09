import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ambulanceYear'
})
export class AmbulanceYearPipe implements PipeTransform {

    transform(leletek: any, directions: string): any {
        const c = leletek;

        c.sort(function (a, b) {
            var keyA = new Date(a.date),
                keyB = new Date(b.date);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        return c;

    }

}


@Pipe({
    name: 'yearP'
})
export class YearPipe implements PipeTransform {

    transform(leletek: any, year: string): any {
        if (year == '0') return leletek;
        else
            return leletek.filter(lelet => lelet.year == year);

    }

}
